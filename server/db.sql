--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: tpl622_8
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone_number character varying(50),
    address text,
    image_path character varying(512)
);


ALTER TABLE public.contacts OWNER TO tpl622_8;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_8
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_id_seq OWNER TO tpl622_8;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_8
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: tpl622_8
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: tpl622_8
--

COPY public.contacts (id, first_name, last_name, email, phone_number, address, image_path) FROM stdin;
2	Killua	Zoldyck	killua@example.com	+0987654323	456 Elm St, Somecity, Somestate, 67890	https://i.pinimg.com/originals/20/da/87/20da8758f59b1e1af09a20c6cda98577.jpg
1	Gon22	Freecss	gon@example.com	+1234567890	123 Main St, Anytown, Anystate, 12345	https://practicaltyping.com/wp-content/uploads/2020/08/gon.png
13	Kurapika2	Kurta	kurapika@example.com	+345677878	234 Hunter x Hunter	https://cdn.myanimelist.net/images/characters/4/174563.jpg
\.


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_8
--

SELECT pg_catalog.setval('public.contacts_id_seq', 23, true);


--
-- Name: contacts contacts_email_key; Type: CONSTRAINT; Schema: public; Owner: tpl622_8
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_email_key UNIQUE (email);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_8
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

