export const postApplication = (application) => (
  $.post({
    url: '/api/student_applications',
    data: {application},
    // TODO: this shouldn't be neccesary ajax won't return json without it
    dataType: 'json'
  })
);

export const getApplications = () => (
  $.get({
    url: '/api/student_applications'
  })
);

export const getApplication = (id) => (
  $.get({
    url: '/api/student_applications/'+id
  })
);

export const updateApplicationStatus = (status,id) => (
  $.ajax({
    method: "PATCH",
    url: '/api/student_applications/'+id,
    data: {application: {status}}
  })
);

