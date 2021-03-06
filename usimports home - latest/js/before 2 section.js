window.addEventListener('load', function() {
    AddMoreFeature = document.getElementById('AddMoreFeature');
    AddMoreBlog = document.getElementById('AddMoreBlog');

    AddMoreFeature.addEventListener('click', function() {
        FeatureHolder = document.getElementById('FeatureHolder');

        div = document.createElement('div');
        div.classList.add('individualContacts');
        div.classList.add('draggable');
        div.setAttribute('draggable', 'true')
        div.innerHTML = ` 
        <div class="row mb-3">
        <div class="col-md-3 pt-4">
                                            <div>
                                                <input id="" class='myinputlass' type="file">
                                                <img src="images/upload.jpg" class="imgtoReplace img-fluid" height="250px" width="250px">
                                            </div>
                                        </div>

                                        <div class="col-md-9">
                                            <div class="col-md-12">
                                                <div class="col-md-12 mb-1">
                                                    <label for="featureHeading">Feature Heading </label>
                                                </div>
                                                <div class="col-md-12  mb-2">
                                                    <input type="text" class='form-control' id="featureHeading" placeholder="Feature Heading">
                                                </div>
                                                <div class="col-md-12  mb-2">
                                                    <label for="featureDescription">Feature Details:</label>
                                                    <textarea class="form-control" rows="5" id="featureDescription"></textarea>
                                                </div>
                                                <div class="col-md-12">

                                                    <label for="FeaturelinkPage"> Map Code </label>

                                                    <input type="text" id='FeaturelinkPage' class='form-control' placeholder="Page URL">

                                                </div>
                                            </div>
                                        </div>



                                    </div>
        <span class='closeFeature>X</span>`;



        // append the dynamic html to feature and blog
        FeatureHolder.appendChild(div);
        BlogHolder.appendChild(div);





        // close with animation and show model for feature
        closeFeature = document.querySelectorAll('.closeFeature')
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


        // code for drag and change position Feature
        draggable = document.querySelectorAll('.draggable')
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
            appendBeforeEl = findElemtoAppend(e.clientY);
            FeatureHolder.insertBefore(getCurrentdragEl, appendBeforeEl)
        })


        // code for drag and change position blog
        draggableBlog = document.querySelectorAll('.draggableBlog')
        draggableBlog.forEach(onebyonedragel => {
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
    })

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
})








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












}) //on load ends here




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