cd backend
sudo -u postgres psql -U postgres -d postgres -c "alter user postgres with password 'test';"
sudo -u postgres psql -c 'CREATE DATABASE "Xmeme";'
sudo -u postgres psql -d 'Xmeme' << EOF
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
