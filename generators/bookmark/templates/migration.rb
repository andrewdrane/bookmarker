class <%=migration_name.underscore.camelize%> < ActiveRecord::Migration
  def self.up
    create_table :<%=table_name%> do |t|
      t.string    :url
      t.string    :title
      t.text      :description
      #t.integer   :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :<%=table_name%>
  end
end