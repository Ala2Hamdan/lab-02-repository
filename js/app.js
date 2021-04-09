  
'user strict';
$('document').ready(getImagesData);
function Photo(image_url,title,description,keyword,horns){
    this.image_url= image_url;
    this.title= title;
    this.description= description;
    this.keyword= keyword;                                            
    this.horns= horns;
}
Photo.prototype.render = function(){
    let divRender =$('#my-template').clone();
    $('main').append(divRender);
    divRender.find('h2').text(this.title);
    divRender.find('img').attr('src',this.image_url);
    divRender.find('p').text(this.description);
    $('select').append(`<option value='${this.keyword}'>${this.keyword}</option>`);
    
   
  
    divRender.removeAttr('id');

}
Photo.prototype.renderKeyWord = function () {
    let divRender =$('#my-template').clone();
    $('main').append(divRender);
    divRender.find('h2').text(this.title);
    divRender.find('img').attr('src',this.image_url);
    divRender.find('p').text(this.description);
    $('select').append(`<option value='${this.keyword}'>${this.keyword}</option>`);
    
    
    divRender.removeAttr('id');
   
};
$('select').change(function () {
    let keyWord = $('select option:selected').val();
    if (keyWord === 'default') {
        
        $('div').attr('id','my-template');
        getImagesData();
    } else {
        
       
        $('div').attr('id','my-template');
        geteveryThingDataByKey(keyWord);
        
    }
});

function geteveryThingDataByKey(key) {

    const ajaxSetting = {
        method: 'get',
        dataType: 'json'
    };
    $.ajax('data/page-1.json', ajaxSetting).then(data => {
        let ObjeverThing;
        data.forEach(item => {
            if(item.keyword===key){
                ObjeverThing = new Photo( item.image_url,item.title,item.description, item.keyword,item.horns);
               
                ObjeverThing .render();
            }

        });
    });
}


function getImagesData(){
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }
    $.ajax('data/page-1.json', ajaxSettings).then(data=> {
        
        data.forEach(element=> {
            let imgObj = new Photo (element.image_url,element.title,element.description,element.keyword,element.horns);
            imgObj.renderKeyWord();
            
        })
})
}

