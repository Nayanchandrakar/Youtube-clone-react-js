let Menu = [
    {name: "Home",image: "/images/sidebar1.png", mark:"sections", query:'new', link:'/'},
    {name: "Shorts",image: "/images/shorts.png", mark:"sections", query:'shorts', link:'/'},
    {name: "Subscriptions",image: "/images/sidebar3.png", mark:"sections", query:'subscription' , link:'/subscription'},
    {name: "Library",image: "/images/sidebar4.png", mark:"features" , link:'/library'},
    {name: "History",image: "/images/sidebar5.png", mark:"features" , link:'/history'},
    {name: "Menu",image: "/images/menu.png", mark:"Menuevent",},
    {name: "Explore",mark:"Explore"},
    {name: "Trending",image: "/images/trending.png", mark:"explore" , query:'trending', link:'/'},
    {name: "Music",image: "/images/music.png", mark:"explore" , query:'music', link:'/'},
    {name: "Movies",image: "/images/movies.png", mark:"explore" , query:'movies', link:'/'},
    {name: "Live",image: "/images/live.png", mark:"explore" , query:'Live', link:'/'},
    {name: "Gaming",image: "/images/gaming.png", mark:"explore" , query:'gaming', link:'/'},
    {name: "News",image: "/images/news.png", mark:"explore" , query:'News', link:'/'},
    {name: "Learning",image: "/images/learning.png", mark:"explore" , query:'learning', link:'/'},
]


let LibraryData = [
    {field: "Watch later",image: "/images/sidebar5.png", info:"Save videos to watch later. Your list shows up right here."},
    {field: "Playlists",image: "/images/playlist.png", info:"Playlists you create or save will show up here."},
    {field: "Liked videos",image: "/images/like.png", info:"Use the thumbs up icon to like videos. Your list shows up right here."},
]

const player = [
    {field: "",image: "/Player/like.png" , width: '10rem',},
    {field: "",image: "/Player/dislike.png", width: '10rem',},
    {field: "share",image: "/Player/share.png", width: '22rem',},
    {field: "Dowload",image: "/Player/download.png", width: '28rem',},
    {field: "",image: "/Player/menu.png", width: '10rem',},
]
export{Menu, LibraryData,player}