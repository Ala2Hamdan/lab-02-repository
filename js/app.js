  
'user strict';

const arrOfObj1 =[];
const arrOfObj2=[];
const arrOfKeywords1=[];
const arrOfKeywords2=[];
let idTemlplate = '#photo-template';
$('document').ready(function(){
    function Photo(image_url,title,description,keyword,horns){
        this.image_url= image_url;
        this.title= title;
        this.description= description;
        this.keyword= keyword;                                            
        this.horns= horns;
        // console.log(this);
    }
    Photo.prototype.render = function(){
        let photoSection =$('#my-template').clone();
        $('main').append(photoSection);
        photoSection.find('h2').text(this.title);
        photoSection.find('img').attr('src',this.image_url);
        photoSection.find('p').text(this.description);
        photoSection.removeAttr('id');
        // let template = $(idTemlplate).html();
        // let html = Mustache.render(template,this);
        // console.log(html);
        // return html;
     } 



    
    
    
        const ajaxSetting = {
            method: 'get',
            dataType: 'json'
        };
        $.ajax('data/page-1.json', ajaxSetting).then(data => {
            // let ObjeverThing;
            data.forEach(item => {
                
                    const ObjeverThing = new Photo( item.image_url,item.title,item.description, item.keyword,item.horns);
                    arrOfObj1.push(ObjeverThing);
                    if(!(arrOfKeywords1.includes(item.keyword))){
                        arrOfKeywords1.push(item.keyword);
                        $('select').append(`<option>${item.keyword}</option>`);
                    }
                    
                    ObjeverThing.render();
                
    
            });
        });
    
   
//-------------------------------------------------------------
    $('#page1').click(function() {
        $('main').empty();
        arrOfObj1.forEach(item => {
        
          item.render();
            
        })
        $('select').on('change', function(){
            $('main').empty();
            arrOfObj1.forEach(item => {
                if(item.keyword===$(this).val()){
                    item.render();
                }
            })
        });
    })
    $('#page2').click(function() {
        $('main').empty();
    const ajaxSetting = {
        method: 'get',
        dataType: 'json'
    };
    $.ajax('data/page-2.json', ajaxSetting).then(data => {
       
        data.forEach(item => {
            
                const ObjeveryThing = new Photo( item.image_url,item.title,item.description, item.keyword,item.horns);
                arrOfObj2.push(ObjeveryThing);
                if(!(arrOfKeywords2.includes(item.keyword))){
                    arrOfKeywords2.push(item.keyword);
                    $('select').append(`<option>${item.keyword}</option>`);
                }
                
                ObjeveryThing.render();
            

        });
    });
       
    $('select').on('change', function(){
        $('main').empty();
        arrOfObj2.forEach(item => {
            if(item.keyword===$(this).val()){
                item.render();
            }
        })
    });

    })
    
 
    //--------------------------------------------    
    $('input[type=radio][name=sort]').on('change', function() {
        switch ($(this).val()) {
          case 'sort1':
            sortTitle(arrOfObj1);
            break;
          case 'sort2':
            sortTitle(arrOfObj2);
            break;
        }
      });

function sortTitle(array) {
   array.sort((a,b)=>{
    if (a.title<b.title){
        return -1;
    }else if (a.title>b.title){
        return 1;
    }
    else {
        return 0;
    }
   })
   return arr;
}
function sort(array) {
    array.sort((a,b)=>{
        if (a.horns<b.horns){
            return -1;
        }else if (a.horns>b.horns){
            return 1;
        }
        else {
            return 0;
        }
       })
       return arr;
}
});

