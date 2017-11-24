# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171124110304) do

  create_table "chapters", force: :cascade do |t|
    t.string "title", limit: 255
    t.integer "number", limit: 8
    t.integer "created_at", limit: 8
    t.integer "updated_at", limit: 8
    t.integer "part_id"
    t.text "intro"
    t.string "quality"
    t.text "summary"
    t.text "draft_text"
    t.boolean "use_draft_text"
    t.string "filename"
    t.index ["number"], name: "index_chapters_on_number"
    t.index ["part_id"], name: "index_chapters_on_part_id"
  end

  create_table "documents", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id"
    t.index ["title"], name: "index_documents_on_title"
    t.index ["user_id"], name: "index_documents_on_user_id"
  end

  create_table "parts", force: :cascade do |t|
    t.string "title"
    t.integer "number"
    t.text "description"
    t.string "quality"
    t.text "summary"
    t.text "draft_text"
    t.boolean "use_draft_text"
  end

  create_table "segments", force: :cascade do |t|
    t.integer "chapter_id", limit: 8
    t.integer "position", limit: 8
    t.integer "created_at", limit: 8
    t.integer "updated_at", limit: 8
    t.string "quality", limit: 4
    t.text "source_text", limit: 65535
    t.text "body"
    t.string "title"
    t.text "summary"
    t.text "draft_text"
    t.boolean "use_draft_text"
    t.index ["chapter_id"], name: "index_segments_on_chapter_id"
  end

  create_table "statements", force: :cascade do |t|
    t.string "summary"
    t.text "elaboration"
    t.integer "order", default: 0
    t.integer "document_id"
    t.index ["document_id"], name: "index_statements_on_document_id"
    t.index ["order"], name: "index_statements_on_order"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", limit: 255, default: "", null: false
    t.string "encrypted_password", limit: 255, default: "", null: false
    t.string "reset_password_token", limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", limit: 4, default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip", limit: 255
    t.string "last_sign_in_ip", limit: 255
    t.integer "modified", limit: 8
    t.integer "created_at", limit: 8
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
