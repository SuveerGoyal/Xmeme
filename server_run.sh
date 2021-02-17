cd backend
echo 'export PATH=$PATH:/usr/local/bin' >> $HOME/.bashrc
sudo -u postgres psql -c 'CREATE DATABASE xmeme;'
sudo -u postgres psql -d 'xmeme' << EOF
CREATE TABLE public.memes2
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    name text NOT NULL,
    url text NOT NULL,
    caption text NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name, url, caption)
);

ALTER TABLE public.memes2
    OWNER to postgres;
EOF
sudo -u postgres psql -U postgres -d postgres -c "alter user postgres with password 'test';"

npm install
npm start
