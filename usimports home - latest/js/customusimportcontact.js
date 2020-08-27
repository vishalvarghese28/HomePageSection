window.addEventListener('load', function() {
        var virtualIMGHeight;
        var virtualIMGWidth;
        document.getElementById('featureHeadingModal').value = '';
        document.getElementById('featureDescriptionModal').value = '';
        document.getElementById('FeaturelinkPageModal').value = '';


        AddMoreFeature = document.getElementById('AddMoreFeature');
        AddMoreFeature.addEventListener('click', function() {

                $('#myModal').modal('show');
                modalCloseFeature = document.getElementById('modalCloseFeature')
                document.getElementsByClassName('homeFeatureBannerjpg')[0].src = 'images/upload.jpg';
                document.getElementsByClassName('homeFeatureBannerjpg')[0].src = 'images/upload.jpg';


                modalCloseFeature.addEventListener('click', function() {


                        featureHeadingModal = document.getElementsByClassName('featureHeadingModal')[0]
                        featureDescriptionModal = document.getElementsByClassName('featureDescriptionModal')[0]
                        FeaturelinkPageModal = document.getElementsByClassName('FeaturelinkPageModal')[0]

                        if (featureHeadingModal.value.trim() != '' && featureDescriptionModal.value.trim() != '' && FeaturelinkPageModal.value.trim() != '') {
                            // create virtual image to check size validation
                            var correctSize = false;
                            var VirtualImg = new Image();
                            VirtualImg.src = document.getElementsByClassName('homeFeatureBannerjpg')[0].src;
                            VirtualImg.onload = function() {
                                    w = this.width;
                                    h = this.height;
                                    virtualIMGWidth = w;
                                    virtualIMGHeight = h;
                                    // onload virtual image close
                                    if (virtualIMGWidth == 54 && virtualIMGHeight == 54) {
                                        correctSize = true
                                        console.log("yes correct " + correctSize)
                                        ifCorrectSized();
                                    } //end if
                                    else {
                                        alert('Proper Size Required 54 X 54 ');
                                        console.log("No Not correct " + correctSize)
                                        return
                                    }


                                    document.getElementById('featureHeadingModal').value = '';
                                    document.getElementById('featureDescriptionModal').value = '';
                                    document.getElementById('FeaturelinkPageModal').value = '';
                                } // added onload image


                            function ifCorrectSized() {

                                FeatureHolder = document.getElementById('FeatureHolder');

                                div = document.createElement('div');
                                div.classList.add('individualFeature');
                                div.classList.add('draggable');
                                div.setAttribute('draggable', 'true')
                                div.innerHTML = ` 
                                <div class="row mb-3 ">
                                <div class="col-md-5  ">
    
                                <p class='bg-danger text-white py-1 text-center'>Need Exact Size : width : 54 Height: 54</p>
                                <div class="tab">
                                    <button class="tablinks" id="defaultOpen" onclick="openimgUpload(event, 'webp')">Webp</button>
                                    <button class="tablinks" onclick="openimgUpload(event, 'jxr')">JXR</button>
                                    <button class="tablinks" onclick="openimgUpload(event, 'jpg')">JPG/PNG</button>
                                </div>
    
                                <div id="webp" class="tabcontent">
    
                                    <div class='mt-3'>
                                    <input class="myinputforWebp" type="file" onchange="checkForwebp(this)" accept="image/webp">
    
                                  
                                        <img src="${document.getElementsByClassName('homeFeatureBannerWebp')[0].src}" class="img-responsive img-fluid img-fluid-height homeagBanner">
                                        <div  class="hereForDimensionDetls_webp mt-3"></div>
                                    </div>
                                </div>
    
                                <div id="jxr" class="tabcontent">
                                    <label for="myinputforJXR">Select a file:</label>
                                    <input type="file" class="myinputforJXR" onchange="checkForJXR(this)">
                                    <div class='mt-3'>
                                        <br> Your Browser Does not Support JXR
                                    </div>
                                
                                    <div  class="hereForDimensionDetls_jxr mt-3"></div>
                                </div>
    
                                <div id="jpg" class="tabcontent">
    
                                    <div class='mt-3'>
                                        
                                            <input class="myinputforJPG" type="file" onchange="checkForJPG(this)" accept="image/x-png,image/jpeg">
                                           
                                        <img src="${document.getElementsByClassName('homeFeatureBannerjpg')[0].src}" class="img-responsive img-fluid img-fluid-height homeagBanner">
                                        <div   class="hereForDimensionDetls_jpg mt-3"></div>
                                    </div>
                                </div>

                                <div class="form-group mt-3 altTextForBanner">
                                    <label for="altTxt">Alt Text for Image</label>
                                    <input type="text" class='form-control' placeholder="Alt text for Image" id='altTxt'>
                                </div>
    
    
    
                            </div>
                                <div class="col-md-7">
                                <div class="col-md-12">
                                <div class="col-md-12 mb-1">
                                <label for="featureHeading">Feature Heading </label>
                                </div>
                                <div class="col-md-12  mb-2">
                                <input type="text" class='form-control' id="featureHeading" placeholder="Feature Heading" value="${$(".featureHeadingModal").val()}">
                                </div>
                                <div class="col-md-12  mb-2">
                                <label for="featureDescription">Feature Details:</label>
                                <textarea class="form-control" rows="5" id="featureDescription" > ${$(".featureDescriptionModal").val()}</textarea>
                                </div>
                                <div class="col-md-12">
                                <label for="FeaturelinkPage"> Map Code </label>
                                
                                <input type="text" id='FeaturelinkPage' class='form-control'  value="${$(".FeaturelinkPageModal").val()}">
                                </div>
                                </div>
                                </div>
                                </div>
                                <span class='closeFeature'>X</span>
                                `;

                                // append the dynamic html to feature and blog
                                console.log(featureHeadingModal.value.trim())

                                FeatureHolder.appendChild(div);

                                // after appending make all fields blank
                                if (FeatureHolder.appendChild(div)) {

                                    isAppended = true
                                    $('#myModal').modal('hide');
                                    document.getElementById('featureHeadingModal').value = '';
                                    document.getElementById('featureDescriptionModal').value = '';
                                    document.getElementById('FeaturelinkPageModal').value = '';
                                    document.getElementById("myinputforWebpOnModal").value = "";
                                    document.getElementById("myinputforJXROnModal").value = "";
                                    document.getElementById("cleaFieldsJPG").innerHTML = "";
                                    document.getElementById("myinputforJPGOnModal").value = "";

                                } else {
                                    isAppended = false;
                                }
                            } // ifCorrectSized closed


                        } // if values are not set, then dont append
                        else {
                            alert('Fields Cannot Be Blank')
                            document.getElementById('featureHeadingModal').value = '';
                            document.getElementById('featureDescriptionModal').value = '';
                            document.getElementById('FeaturelinkPageModal').value = '';
                            return;
                        } // else if not blank on modal fields

                        //  if not removed div is one appended
                        // if removed textfield value getting appended 
                        document.getElementById('featureHeadingModal').value = '';
                        document.getElementById('featureDescriptionModal').value = '';
                        document.getElementById('FeaturelinkPageModal').value = '';


                        // setTimeout(function() {

                        // }, 300)



                    }) // close listener 








                // close with animation and show model for feature
                closeFeature = document.querySelectorAll('.closeFeature');
                closeFeature.forEach(onebyone => {

                    onebyone.addEventListener('click', function() {
                        // starts here
                        xbtnParent = this.parentElement;
                        document.getElementById('showModelB4Del').style.display = 'flex';
                        yesDelContact = document.getElementById('yesDelContact');
                        yesDelContact.addEventListener('click', function(e) {
                                if (e.target.id == 'yesDelContact') {
                                    xbtnParent.classList.add('rotateItB4Del');
                                    xbtnParent.addEventListener('transitionend', function() {
                                        xbtnParent.remove();
                                    })
                                    document.getElementById('showModelB4Del').style.display = 'none';
                                }
                            })
                            // ends here
                    })
                })





                // code for drag and change position Feature
                draggable = document.querySelectorAll('.draggable');
                draggable.forEach(onebyonedragel => {
                    onebyonedragel.addEventListener('dragstart', function() {
                        this.classList.add('dragging')
                    })
                    onebyonedragel.addEventListener('dragend', function() {
                        this.classList.remove('dragging')
                    })
                })

                FeatureHolder.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    getCurrentdragEl = document.querySelector('.dragging')
                    appendBeforeEl = findElemtoAppend_feature(e.clientY);
                    FeatureHolder.insertBefore(getCurrentdragEl, appendBeforeEl)
                })

                function findElemtoAppend_feature(y) {
                    allDragel = [...FeatureHolder.querySelectorAll('.draggable:not(.dragging)')];


                    return allDragel.reduce((closest, child) => {
                        box = child.getBoundingClientRect();
                        offset = y - box.top - box.height / 2;
                        if (offset < 0 && offset > closest.offset) {
                            return { offset: offset, element: child }
                        } else {
                            return closest
                        }
                    }, { offset: Number.NEGATIVE_INFINITY }).element

                }



                // on dynamic creation of div make upload and preview option
                FeatureHolder.addEventListener('click', function(e) {
                        if (e.target.classList[0] === 'myinputlass') {
                            e.target.addEventListener('change', function(y) {
                                var myinputfield = y.target.files[0];
                                var mycurrentimage = y.target.nextElementSibling;
                                var reader = new FileReader();
                                reader.onload = function() {
                                    if (reader.readyState = "complete") {
                                        mycurrentimage.src = reader.result;
                                    }
                                }
                                reader.readAsDataURL(myinputfield);
                            })
                        } // if ends
                    }) // change listener ends





            }) //add click listener ends


        // **************Second click for dynamic creation*****

        AddMoreBlog = document.getElementById('AddMoreBlog');
        AddMoreBlog.addEventListener('click', function() {
                BlogHolder = document.getElementById('BlogHolder');

                div = document.createElement('div');
                div.classList.add('individualBlog');
                div.classList.add('draggable');
                div.setAttribute('draggable', 'true')
                div.innerHTML = ` <div class="row mb-3">
                <div class="col-md-5  ">

                                            <p class='bg-danger text-white py-1 text-center'>Need Exact Size : width : 54 Height: 54</p>
                                            <div class="tab">
                                                <button class="tablinks" id="defaultOpen" onclick="openimgUpload(event, 'webp')">Webp</button>
                                                <button class="tablinks" onclick="openimgUpload(event, 'jxr')">JXR</button>
                                                <button class="tablinks" onclick="openimgUpload(event, 'jpg')">JPG/PNG</button>
                                            </div>

                                            <div id="webp" class="tabcontent">

                                                <div class='mt-3'>

                                                    <input class="myinputforWebp" type="file" onchange="checkForwebp_blogSection(this)" accept="image/webp">


                                                    <img src="images/upload.jpg" class="img-responsive img-fluid img-fluid-height homeagBanner">
                                                    <div class="hereForDimensionDetls_webp mt-3"></div>
                                                </div>
                                            </div>

                                            <div id="jxr" class="tabcontent">
                                                <label for="myinputforJXR">Select a file:</label>
                                                <input type="file" class="myinputforJXR" onchange="checkForJXR_blogSection(this)">
                                                <div class='mt-3'>
                                                    <br> Your Browser Does not Support JXR
                                                </div>

                                                <div class="hereForDimensionDetls_jxr mt-3"></div>
                                            </div>

                                            <div id="jpg" class="tabcontent">

                                                <div class='mt-3'>

                                                    <input class='myinputforJPG' type="file" onchange="checkForJPG_blogSection(this)" accept="image/x-png,image/jpeg">

                                                    <img src="images/upload.jpg" class="img-responsive img-fluid img-fluid-height homeagBanner">
                                                    <div class="hereForDimensionDetls_jpg mt-3" ></div>
                                                </div>
                                            </div>

                                            <div class="form-group mt-3 altTextForBanner">
                                                <label for="altTxt">Alt Text for Image</label>
                                                <input type="text" class='form-control' placeholder="Alt text for Image" id='altTxt'>
                                            </div>



                                        </div>
               <div class="col-md-7">
                   <div class="col-md-12">
                       <div class="col-md-12 mb-1">
                           <label for="BlogHeading">Blog Heading </label>
                       </div>
                       <div class="col-md-12  mb-2">
                           <input type="text" class='form-control' id="BlogHeading" placeholder="Blog Heading">
                       </div>
                       <div class="col-md-12  mb-2">
                           <label for="BlogDescription">Blog Details:</label>
                           <textarea class="form-control" rows="5" id="BlogDescription"></textarea>
                       </div>
                       <div class="col-md-12">

                           <label for="BloglinkPage"> Blog URL </label>

                           <input type="text" id='BloglinkPage' class='form-control' placeholder="Blog URL">

                       </div>
                   </div>
               </div>
           </div>
           <span class='closeBlog'>X</span>`;


                // append the dynamic html  blog

                BlogHolder.appendChild(div);


                // close with animation and show model for BLOG
                closeBlog = document.querySelectorAll('.closeBlog')
                closeBlog.forEach(onebyone => {

                    onebyone.addEventListener('click', function() {
                        // starts here
                        xbtnParent = this.parentElement;
                        document.getElementById('showModelB4Del').style.display = 'flex';
                        yesDelContact = document.getElementById('yesDelContact');
                        yesDelContact.addEventListener('click', function(e) {
                                if (e.target.id == 'yesDelContact') {
                                    xbtnParent.classList.add('rotateItB4Del');
                                    xbtnParent.addEventListener('transitionend', function() {
                                        xbtnParent.remove();
                                    })
                                    document.getElementById('showModelB4Del').style.display = 'none';
                                }
                            })
                            // ends here
                    })
                })



                // code for drag and change position blog
                draggable = document.querySelectorAll('.draggable')
                draggable.forEach(onebyonedragel => {
                    onebyonedragel.addEventListener('dragstart', function() {
                        this.classList.add('dragging')
                    })
                    onebyonedragel.addEventListener('dragend', function() {
                        this.classList.remove('dragging')
                    })
                })

                BlogHolder.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    getCurrentdragEl = document.querySelector('.dragging')
                    appendBeforeEl = findElemtoAppend(e.clientY);
                    BlogHolder.insertBefore(getCurrentdragEl, appendBeforeEl)
                })


                // common function on page loa


                BlogHolder.addEventListener('click', function(e) {
                        if (e.target.classList[0] === 'myinputlass') {
                            e.target.addEventListener('change', function(y) {
                                var myinputfield = y.target.files[0];
                                var mycurrentimage = y.target.nextElementSibling;
                                var reader = new FileReader();
                                reader.onload = function() {
                                    if (reader.readyState = "complete") {
                                        mycurrentimage.src = reader.result;
                                    }
                                }
                                reader.readAsDataURL(myinputfield);
                            })
                        } // if ends
                    }) // change listener ends


            }) //add click listener ends









    }) // onload code ends








// common for both

closModalMsg = document.getElementsByClassName('closModalMsg')[0];
closModalMsg.addEventListener('click', function() {
    document.getElementById('showModelB4Del').style.display = 'none';
})


function findElemtoAppend(y) {
    allDragel = [...document.querySelectorAll('.draggable:not(.dragging)')];


    return allDragel.reduce((closest, child) => {
        box = child.getBoundingClientRect();
        offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element

}















FeatureHolder.addEventListener('click', function(e) {
        if (e.target.classList[0] === 'myinputlass') {
            e.target.addEventListener('change', function(y) {
                var myinputfield = y.target.files[0];
                var mycurrentimage = y.target.nextElementSibling;
                var reader = new FileReader();
                reader.onload = function() {
                    if (reader.readyState = "complete") {
                        mycurrentimage.src = reader.result;
                    }
                }
                reader.readAsDataURL(myinputfield);
            })
        } // if ends
    }) // change listener ends





BlogHolder.addEventListener('click', function(e) {
        if (e.target.classList[0] === 'myinputlass') {
            e.target.addEventListener('change', function(y) {
                var myinputfield = y.target.files[0];
                var mycurrentimage = y.target.nextElementSibling;
                var reader = new FileReader();
                reader.onload = function() {
                    if (reader.readyState = "complete") {
                        mycurrentimage.src = reader.result;
                    }
                }
                reader.readAsDataURL(myinputfield);
            })
        } // if ends
    }) // change listener ends


// close with animation and show model for BLOG
closeBlog = document.querySelectorAll('.closeBlog');
closeBlog.forEach(onebyone => {

    onebyone.addEventListener('click', function() {
        // starts here
        xbtnParent = this.parentElement;
        document.getElementById('showModelB4Del').style.display = 'flex';
        yesDelContact = document.getElementById('yesDelContact');
        yesDelContact.addEventListener('click', function(e) {
                if (e.target.id == 'yesDelContact') {
                    xbtnParent.classList.add('rotateItB4Del');
                    xbtnParent.addEventListener('transitionend', function() {
                        xbtnParent.remove();
                    })
                    document.getElementById('showModelB4Del').style.display = 'none';
                }
            })
            // ends here
    })
})

// close with animation and show model for feature
closeFeature = document.querySelectorAll('.closeFeature');
closeFeature.forEach(onebyone => {

    onebyone.addEventListener('click', function() {
        // starts here
        xbtnParent = this.parentElement;
        document.getElementById('showModelB4Del').style.display = 'flex';
        yesDelContact = document.getElementById('yesDelContact');
        yesDelContact.addEventListener('click', function(e) {
                if (e.target.id == 'yesDelContact') {
                    xbtnParent.classList.add('rotateItB4Del');
                    xbtnParent.addEventListener('transitionend', function() {
                        xbtnParent.remove();
                    })
                    document.getElementById('showModelB4Del').style.display = 'none';
                }
            })
            // ends here
    })
})


function openimgUpload(evt, imgFormat) {
    var i, tabcontent, tablinks;
    ParentColumn = evt.currentTarget.parentElement.parentElement



    tabcontent = ParentColumn.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = ParentColumn.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    ParentColumn.querySelector('#' + imgFormat).style.display = "block";
    evt.currentTarget.className += " active";
}

function openimgUpload_blogSection(evt, imgFormat) {
    var i, tabcontent, tablinks;
    ParentColumn = evt.currentTarget.parentElement.parentElement



    tabcontent = ParentColumn.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = ParentColumn.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    ParentColumn.querySelector('#' + imgFormat).style.display = "block";
    evt.currentTarget.className += " active";
}





function checkForJXR(e) {
    parentColumn = e.parentElement;
    var myinputfield = parentColumn.querySelector('.myinputforJXR').files[0];


    var reader = new FileReader();
    reader.onload = function(e) {
        if (reader.readyState = "complete") {
            var imgObj = new Image()
            imgObj.src = e.target.result;

            imgObj.onload = function() {
                console.log(imgObj.height)

            }

            arrFormName = parentColumn.querySelector('.myinputforJXR').files.item(0).name.split('.')

            if (arrFormName[1] != 'jxr') {
                alert('only select JXR format')
                parentColumn.querySelector('.myinputforJXR').value = ''
                return

            }



        }

    }

    reader.readAsDataURL(myinputfield);

}



function checkForJXR_blogSection(e) {
    parentColumn = e.parentElement;
    var myinputfield = parentColumn.querySelector('.myinputforJXR').files[0];


    var reader = new FileReader();
    reader.onload = function(e) {
        if (reader.readyState = "complete") {
            var imgObj = new Image()
            imgObj.src = e.target.result;

            imgObj.onload = function() {


            }

            arrFormName = parentColumn.querySelector('.myinputforJXR').files.item(0).name.split('.')

            if (arrFormName[1] != 'jxr') {
                alert('only select JXR format ')
                parentColumn.querySelector('.myinputforJXR').value = ''
                return

            }



        }

    }

    reader.readAsDataURL(myinputfield);

}




function checkForJPG(e) {
    var myinputfield = e.parentElement.querySelector('.myinputforJPG').files[0];
    ColumnParent = e.parentElement;
    var mycurrentimage = e.nextElementSibling;

    var reader = new FileReader();
    reader.onload = function(e) {
        if (reader.readyState = "complete") {

            var img = new Image();
            img.src = e.target.result;

            //   console.log(img.width + " and " + img.height)
            img.onload = function() {
                var w = this.width;
                var h = this.height;

                ColumnParent.querySelector('.hereForDimensionDetls_jpg').innerHTML =
                    'about to Upload image Dimension is :<br>Width: <b>' + w + '</b> ' +
                    'Height: <b>' + h + '</b> File Name:<b>' +
                    ColumnParent.querySelector('.myinputforJPG').files.item(0).name + '</b><br />';

                if (w == '54' && h == '54') {


                    mycurrentimage.src = reader.result;
                } else {

                    alert('Need Exact Size : width : 54 Height: 54')
                    mycurrentimage.src = 'images/upload.jpg'
                    return
                }
            }


        }

    }

    reader.readAsDataURL(myinputfield);

}


function checkForJPG_blogSection(e) {
    console.log(e.parentElement.querySelector('.myinputforJPG'))
    var myinputfield = e.parentElement.querySelector('.myinputforJPG').files[0];
    ColumnParent = e.parentElement;
    var mycurrentimage = e.nextElementSibling;

    var reader = new FileReader();
    reader.onload = function(e) {
        if (reader.readyState = "complete") {

            var img = new Image();
            img.src = e.target.result;

            //   console.log(img.width + " and " + img.height)
            img.onload = function() {
                var w = this.width;
                var h = this.height;

                ColumnParent.querySelector('.hereForDimensionDetls_jpg').innerHTML =
                    'about to Upload image Dimension is :<br>Width: <b>' + w + '</b> ' +
                    'Height: <b>' + h + '</b> File Name:<b>' +
                    ColumnParent.querySelector('.myinputforJPG').files.item(0).name + '</b><br />';

                if (w == '230' && h == '220') {


                    mycurrentimage.src = reader.result;
                } else {

                    alert('Need Exact Size : width : 230 Height: 220')
                    mycurrentimage.src = 'images/upload.jpg'
                    return
                }
            }


        }

    }

    reader.readAsDataURL(myinputfield);

}



function checkForwebp(e) {


    // console.log(e.parentElement.querySelector('.myinputforJPG'))
    // var myinputfield = e.parentElement.querySelector('.myinputforJPG').files[0];
    // ColumnParent = e.parentElement;
    // var mycurrentimage = e.nextElementSibling;


    var myinputfield = e.parentElement.querySelector('.myinputforWebp').files[0];
    ParentColumn = e.parentElement;

    var here = ParentColumn.querySelector('#hereForDimensionDetls_webp');


    var mycurrentimage = e.nextElementSibling;


    var reader = new FileReader();

    reader.onload = function(e) {
        if (reader.readyState = "complete") {

            var img = new Image();
            img.src = e.target.result;

            //   console.log(img.width + " and " + img.height)
            img.onload = function() {
                var w = this.width;
                var h = this.height;

                ParentColumn.querySelector('.hereForDimensionDetls_webp').innerHTML =
                    'about to Upload image Dimension is :  <br>Width: <b> ' + w + '</b> ' +
                    'Height: <b>' + h + '</b>  File Name: <b>' +
                    ParentColumn.querySelector('.myinputforWebp').files.item(0).name + '</b><br />';

                if (w == '54' && h == '54') {


                    mycurrentimage.src = reader.result;
                } else {

                    alert('Need Exact Size : width : 54 Height: 54')
                    mycurrentimage.src = 'images/upload.jpg'
                    return
                }
            }


        }

    }

    reader.readAsDataURL(myinputfield);

}



function checkForwebp_blogSection(e) {


    // console.log(e.parentElement.querySelector('.myinputforJPG'))
    // var myinputfield = e.parentElement.querySelector('.myinputforJPG').files[0];
    // ColumnParent = e.parentElement;
    // var mycurrentimage = e.nextElementSibling;


    var myinputfield = e.parentElement.querySelector('.myinputforWebp').files[0];
    ParentColumn = e.parentElement;

    var here = ParentColumn.querySelector('#hereForDimensionDetls_webp');


    var mycurrentimage = e.nextElementSibling;


    var reader = new FileReader();

    reader.onload = function(e) {
        if (reader.readyState = "complete") {

            var img = new Image();
            img.src = e.target.result;

            //   console.log(img.width + " and " + img.height)
            img.onload = function() {
                var w = this.width;
                var h = this.height;

                ParentColumn.querySelector('.hereForDimensionDetls_webp').innerHTML =
                    'about to Upload image Dimension is :  <br>Width: <b> ' + w + '</b> ' +
                    'Height: <b>' + h + '</b>  File Name: <b>' +
                    ParentColumn.querySelector('.myinputforWebp').files.item(0).name + '</b><br />';

                if (w == '230' && h == '220') {


                    mycurrentimage.src = reader.result;
                } else {

                    alert('Need Exact Size : width : 230 Height: 220')
                    mycurrentimage.src = 'images/upload.jpg'
                    return
                }
            }


        }

    }

    reader.readAsDataURL(myinputfield);

}