cd backend
sudo -u postgres psql -c 'CREATE DATABASE Xmeme'
sudo -u postgres psql -d 'Xmeme' << EOF
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


npm install
npm start
