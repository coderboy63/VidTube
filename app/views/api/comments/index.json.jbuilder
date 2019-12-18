@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end

  json.users do
    json.set! comment.user_id do
      json.partial! "api/users/user", user: comment.user
    end
  end

  json.video do
    json.id @video.id
    json.comment_count @comment_count
  end
end