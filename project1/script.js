const addFriend = document.querySelector('.add-friend');
const remove = document.querySelector('.Remove');

const added = () => {
    document.querySelector('.nickname').innerText = "Friend";
    addFriend.innerText = "Added";
}

const removed = () => {
    document.querySelector('.nickname').innerText = "Stranger";
    addFriend.innerText = "Add";
}

addFriend.addEventListener('click', added);

remove.addEventListener('click', removed);
