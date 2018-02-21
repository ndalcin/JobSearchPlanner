class Api::TypesController < ApiController
  # GET /types
  def index
    @types = Type.all

    render json: @types
  end

  # GET /types/1
  def show
    @type = Type.find(params[:id])

    render json: @type
  end

end
