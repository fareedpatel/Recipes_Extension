class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  # GET /recipes.json
  def index
    @recipes = Recipe.all
  end

  def like
    @recipe = Recipe.find(params[:recipe_id])
    @votes = @recipe.votespositive + 1
    @recipe.update(votespositive: @votes)
    render :show
  end

  def dislike
    @recipe = Recipe.find(params[:recipe_id])
    @votes = @recipe.votesnegative + 1
    @recipe.update(votesnegative: @votes)
    render :show
  end

  # GET /recipes/1.json
  def show
  end

  # GET /recipes/new
  def new
    @recipe = Recipe.new
  end

  # GET /recipes/1/edit
  def edit
  end

  # POST /recipes.json
  def create
    @recipe = Recipe.new(recipe_params)
    respond_to do |format|
      if @recipe.save
        p @recipe
        format.json { render :show, status: :created, location: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:name, :ingredients, :instructions, :preparation_time, :link, :votespositive, :votesnegative)
    end
end