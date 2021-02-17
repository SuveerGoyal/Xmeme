cd backend
sudo -u postgres psql -c 'CREATE DATABASE xmeme;'
sudo -u postgres psql -d 'xmeme' << EOF
CREATE TABLE memes
(
    id integer SERIAL PRIMARY KEY,
    name text NOT NULL,
    url text NOT NULL,
    caption text NOT NULL,
    UNIQUE (name, url, caption)
);
EOF
sudo -u postgres psql -U postgres -d postgres -c "alter user postgres with password 'test';"
npm install
npm start
