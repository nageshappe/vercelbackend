$("#add-user").submit(function(event){
    alert("Student added successfully")
})

$("#update-student").submit(function(event){
    event.preventDefault();

    var unindexed_array= $(this).serializeArray();
    var data={}

    $map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data)
})