
function updateBuilding(data, id) {
    $.ajax({
        url: '${API}/'+id+'/users',
        type: 'POST',
        dataType: 'json',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: function(res) {
            window.location.href = "<c:url value='/admin/building/list?message=update_success'/>";
        },
        error: function(res) {
            console.log(res);
            window.location.href = "<c:url value='/admin/building/list?message=error_system'/>";
        }
    });
}

function updatePrioritize(action,id) {
    $.ajax({
        url: '${API}/'+id+'/priority?action='+action,
        type: 'PUT',
        dataType: 'json',
        contentType:'application/json',
        data: JSON.stringify(),
        success: function(res) {
            window.location.href = "<c:url value='/admin/building/list?message=update_success'/>";
        },
        error: function(res) {
            console.log(res);
            window.location.href = "<c:url value='/admin/building/list?message=error_system'/>";
        }
    });
}

function deleteBuilding(data) {
    $.ajax({
        url: '${API}',
        type: 'DELETE',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: function(res) {
            window.location.href = "<c:url value='/admin/building/list?message=delete_success'/>";
        },
        error: function(res) {
            console.log(res);
            window.location.href = "<c:url value='/admin/building/list?message=error_system'/>";
        }
    });
}

function warningBeforeDelete() {
    showAlertBeforeDelete(function () {
        event.preventDefault();
        var dataArray = $(' tbody input[type=checkbox]:checked').map(function () {
            return $(this).val();
        }).get();
        deleteBuilding(dataArray);
    });
}

function openModelAssignBuilding() {
    $('#assignBuildingModal').modal()
    ;
}

function loadUserAssignBuilding(buildingId) {
    var buildingIdHidden = '<input type="hidden" name="buildingId" value=' + buildingId + ' id="buildingId"></input>';
    $('#fieldHidden').html(buildingIdHidden);
    $.ajax({
        url: '${loadUser}?role=USER&buildingid='+buildingId,
        type: 'GET',
        success: function(res) {
            var row = '';
            $.each(res, function (index,user) {
                row += '<tr>';
                row += '<td class="text-center"><input type="checkbox" name="checkList" value="'+user.id+'" id="" class="check-box-element" ' + user.checked + '/></td>';
                row += '<td class="text-center">' +user.fullName+ '</td>';
                row += '</tr>';
            });
            $('#userAssignTable tbody').html(row);
        },
        error: function(res) {
            console.log(res);
        }
    });
}