class Api::TasksController < ApiController
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all

    render json: @tasks
  end

  # GET /tasks/1
  def show
    if @task
     render json: @task, status: 200
    else
     render json: { status: "error", message: "Resource not found." }, status: 404
    end
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: 200
    else
      render json: @task.errors, status: 400
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task, status: 200
    else
      render json: { message: @task.errors }, status: 400
    end
  end

  # DELETE /tasks/1
  def destroy
    if @task.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this task." }, status: 404
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:id, :name, :date, :description, :type_id, :notes)
    end

end
