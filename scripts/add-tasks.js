function getTxtAddTask() {
    return $('#txt-add-task');
}

function getCmbAddTag() {
    return $('#cmb-add-tag');
}

function getBtnAddTask() {
    return $('#btn-add-task');
}

$('document').ready(function() {
    getBtnAddTask().click(function() {
        if (getTxtAddTask().val() == "") {
            openMessage('fail', "You need to type a task");
        } else if (getCmbAddTag().val() == "none") {
            openMessage('fail', "You need to select a tag");
        } else {
            var title = getTxtAddTask().val();
            var tag = $('#cmb-add-tag').find(':selected').val();
            buildTask(title, '', tag);
            openMessage('success', "Task was created successfully!");
        }
    })
})


function buildTask(title, content, tag) {
    var html = "";
    html = html + '<div class="task ' + tag + '">'
    html = html + '<div class="title">' + title + '</div>'
    html = html + '<div class="content">' + content + '</div>'
    html = html + '<div class="tag">'
    html = html + '<div class="actions">'
    html = html + '<span class="update-tag">Update</span>'
    html = html + '<span class="delete-task">Delete</span>'
    html = html + '</div>'
    html = html + '<div class="texts">'
    html = html + '<span class="tag-text">' + tag + '</span>'
    html = html + '</div>'
    html = html + '</div>'
    html = html + '</div>'

    $('.list-container').append(html);
}
