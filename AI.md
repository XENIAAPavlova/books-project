AI

https://www.googleapis.com/books/v1/volumes?q=harry%20potter%20rowling


https://openlibrary.org/search.json?q=harry potter&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything

https://openlibrary.org/trending/now.json


Cover link (S,M,L)

https://covers.openlibrary.org/b/id/10521270-L.jpg

`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`


https://openlibrary.org/works/OL267127W/Tolstoy?edition=ia%3Atolstoytalesofco0000tols_n9i6 


https://openlibrary.org/works/OL267127W/Tolstoy?edition=ia%3Atolstoytalesofco0000tols_n9i6 


------------
Client ID:

96250092174-d608he6aktcnjajh0h3c6s7tr4dvo02r.apps.googleusercontent.com

Client Secret:

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

------------

# Insert data into localstorage

- window.localStorage.setItem("foo_bar", "hello world")
- window.localStorage.setItem("google_auth_user", JSON.stringify({email: "qwe@rty.com", name: "John Doe"}))

# Fetch data from localstorage

- window.localStorage.getItem("foo_bar")
- window.localStorage.getItem("google_auth_user")

# Fetch and unwrap data from localstorage

- JSON.parse(window.localStorage.getItem("google_auth_user"))


> let array = ["a", "b", "c"];
> let index = 1;
> array.splice(index, 1);
[ 'b' ]
> array;
[ 'a', 'c' ]