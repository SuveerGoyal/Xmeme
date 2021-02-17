cd backend
sudo -u postgres psql -c 'CREATE DATABASE xmeme;'
sudo -u postgres psql -d 'xmeme' << EOF
CREATE TABLE memes
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    url text NOT NULL,
    caption text NOT NULL,
    UNIQUE (name, url, caption)
);
EOF
npm install
npm start
