CREATE TABLE tidbit.users (
    userid SERIAL primary key,
    email text NOT NULL,
    password text NOT NULL,
    active integer NOT NULL DEFAULT 1
);

CREATE TABLE tidbit.bookmarks (
    userid integer NOT NULL references users(userid),
    url text not null,
    title text not null,
    tags text[]
);
