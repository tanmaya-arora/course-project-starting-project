import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
    title = 'Recipes';
    selectedRecipe: any;
    selectedRecipeBool: boolean = false;

    onRecipeSelected(recipe: any) {
        this.selectedRecipe = recipe;
        this.selectedRecipeBool = true;
    }

    onRecipeDeselected() {
        this.selectedRecipe = null;
        this.selectedRecipeBool = false;
    }

    onRecipeAdded(recipe: any) {
        this.selectedRecipe = recipe;
    }

    onRecipeDeleted(recipe: any) {
        this.selectedRecipe = null;
        this.selectedRecipeBool = false;
    }

    onRecipeUpdated(recipe: any) {
        this.selectedRecipe = recipe;
    }

    onRecipeSaved(recipe: any) {
        this.selectedRecipe = null;
    }

    onRecipeCanceled() {
        this.selectedRecipe = null;
    }

    constructor() { }

    ngOnInit() {
        this.selectedRecipeBool = false;
     }
}