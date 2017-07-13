class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.float :vote_average
      t.string :poster_path
      t.timestamps
    end
  end
end
