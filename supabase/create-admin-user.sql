-- Supabaseの管理ダッシュボードで実行するSQL
-- Authentication > Users に手動でユーザーを作成することもできます

-- 以下の情報で管理者ユーザーを作成してください：
-- Email: admin@portfolio.com
-- Password: Portfolio2024!

-- SQLでユーザーを作成する場合（Supabase管理画面のSQL Editorで実行）
-- 注意: この方法は開発環境でのみ使用してください

/*
-- プロファイルテーブルに管理者情報を追加
INSERT INTO profiles (id, username, full_name, created_at, updated_at)
VALUES (
  'YOUR_USER_ID_HERE', -- Supabaseでユーザー作成後に取得したIDを入力
  'admin',
  'Portfolio Admin',
  NOW(),
  NOW()
);
*/