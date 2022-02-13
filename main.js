var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://thumbs.dreamstime.com/z/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg","https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6","https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6","https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"];
var names = ["Abhishek Singh", "Sandhya Singh", "Nandini  Singh", "Nikhil Singh"];
//console.log('A-5');
var i = 0;
function update()
{
  //console.log('A-1');
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    console.log('A-2');
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names];
    //console.log('A-3');
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    //console.log('A-4');
}
