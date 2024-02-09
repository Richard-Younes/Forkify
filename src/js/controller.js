/** @format */
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
	try {
		// Get the id from the http link after the #
		const id = window.location.hash.slice(1);

		if (!id) return;
		recipeView.renderSpinner();

		// 0) Update results view to mark selected search result
		resultsView.update(model.getSearchResultsPage());

		// Update the bookmark
		bookmarksView.update(model.state.bookmarks);

		// 1) Loading recipe
		await model.loadRecipe(id);

		// 2) Rendering recipe
		recipeView.render(model.state.recipe);
	} catch (error) {
		recipeView.renderError();
	}
};

const controlSearchResults = async function () {
	try {
		// 1) get search query
		const query = searchView.getQuery();
		if (!query) return;

		resultsView.renderSpinner();

		// 2) Load search results
		await model.loadSearchResult(query);

		// 3) Render results
		resultsView.render(model.getSearchResultsPage(1));

		// 4) Render initial pagination buttons
		paginationView.render(model.state.search);
	} catch (error) {
		console.log(error);
	}
};

const controlPagination = function (goToPage) {
	// 1) Render results
	resultsView.render(model.getSearchResultsPage(goToPage));

	// 2) Render initial pagination buttons
	paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
	// Update the recipe servings {in state}
	model.updateServings(newServings);

	// Update the recipe view
	// recipeView.render(model.state.recipe);
	recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
	// 1) Add/remove bookmark
	if (!model.state.recipe.bookmarked) {
		model.addBookmark(model.state.recipe);
	} else {
		model.deleteBookmark(model.state.recipe.id);
	}

	// 2) update recipe view
	recipeView.update(model.state.recipe);

	// 3) Render bookmarks
	bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks = function () {
	bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
	try {
		// Show loading spinner
		addRecipeView.renderSpinner();

		// Upload the new recipe data
		await model.uploadRecipe(newRecipe);
		console.log(model.state.recipe);

		// Render recipe
		recipeView.render(model.state.recipe);

		// Success message
		addRecipeView.renderMessage();

		// Render bookmark view
		bookmarksView.render(model.state.bookmarks);

		// Change ID in URL
		window.history.pushState(null, '', `#${model.state.recipe.id}`);

		// Close form window
		setTimeout(function () {
			addRecipeView.toggleWindow();
		}, MODAL_CLOSE_SEC * 1000);
	} catch (error) {
		console.error('💥💥', error);
		addRecipeView.renderError(error);
	}
};

const init = function () {
	bookmarksView.addHandlerRender(controlBookmarks);

	recipeView.addHandlerRender(controlRecipes);
	recipeView.addHandlerUpdateServings(controlServings);
	recipeView.addHandlerAddBookmark(controlAddBookmark);

	searchView.addHandlerSearch(controlSearchResults);

	paginationView.addHandlerClick(controlPagination);

	addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
