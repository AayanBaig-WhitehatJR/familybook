var familyMembers = [
    "My Mom", "My Dad", "Myself", "My Uncle and my Aunt" , "My Grandmother", "My Grandfather"
];
var images = [
    "https://www.nicepng.com/png/detail/89-892939_mom-cartoon-clipart-mom-animated.png",
    "https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png",
    "https://www.google.com/search?q=animated+kid&sxsrf=ALeKk00pG4wr2Y2E0st4NjhJfCnzsxvDcA:1609763409481&tbm=isch&source=iu&ictx=1&fir=dy5SZcKYMMXWFM%252CAxeCOrI6lz-lKM%252C_&vet=1&usg=AI4_-kQtZ2lbNytELo8KKwa6CTL8AUTsvw&sa=X&ved=2ahUKEwio2saBpILuAhVmzjgGHTN_BVcQ9QF6BAgREAE#imgrc=dy5SZcKYMMXWFM",
    "https://image.shutterstock.com/image-vector/uncle-aunt-happy-family-having-260nw-557191507.jpg",
    "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dgrandfather%2Bcartoon&psig=AOvVaw19UCl_-IeiY5VIzfAkMiwt&ust=1609849875074000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND_raKkgu4CFQAAAAAdAAAAABAI"

]
var i = 0;
function switchimgandfamilymember(){
    document.getElementById("mfb1").src = images[i];
    document.getElementById("familyMember").innerHTML = familyMembers[i];
    i++;
}