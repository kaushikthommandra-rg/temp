class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.float :vote_average
      t.integer :movie_id
      t.string :poster_path
      t.string :release_date
      t.text :overview

      t.timestamps
    end
  end
end
