
<script setup>

</script>
<template>
  <div class="sh-ticket">
    <h4>Subject : New Ticket</h4>
    <div class="col-md-4  sh-actions d-flex justify-content-between">
      <button type="button" class="btn btn-success btn-sm opacity-75">Complete</button>
      <button type="button" class="btn btn-danger btn-sm opacity-75">InComplete</button>
      <button type="button" class="btn btn-info btn-sm opacity-75 text-white">Progressing</button>

    </div>
    <div class="row mt-3">
      <div class="col-md-5">
        <div class="card shadow-sm mb-5">
          <div class="card-body">
            <ul class="sh-ul ">
              <li class="p-1 d-flex"><b class="sh-ticket-item me-3">Subject:</b> New Ticket</li>
              <li class="p-1"><b class="me-3">Department:</b>Checking </li>
              <li class="p-1"><b class="sh-ticket-item me-3">Status: </b> Progressing</li>
              <li class="p-1"><b class="me-4">Created At:</b>17-07-2022, 02.55 p.m, Monday</li>
              <li class="p-1"><b class="me-3">Created By: </b>Admin Name</li>
              <li class="p-1"><b class="sh-ticket-item">Message:</b> Happy to create the ticket really nice.</li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm mt-5 mb-5">
          <div class="card-body">
            <ul class="sh-ul">
              <li class="p-1"><b class="sh-ticket-item">Order ID:</b> 2548bs5</li>
              <li class="p-1"><b class="sh-ticket-item">Deadline:</b>22-07-2022, 04.00 p.m, Thursday </li>
              <li class="p-1"><b class="me-2">Description:</b> Progressing</li>
              <li class="p-1"> <button type="button" class="btn btn-info btn-sm opacity-75 p-1.5">View</button></li>

            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent">
            <h5 class="text-center">Ticket Messages</h5>
          </div>
          <div class="card-body">
            <div class="card float-start w-75 bg-opacity-25 bg-info">
              <div class="card-body">
                <i class="bi bi-person-circle"></i> Username
                <p class="mt-2">This is the message that was sent by the system</p>
              </div>
              <div class="card-footer sh-card-ticket-footer bg-transparent border-0">
                <p class="sh-time">02.48 pm <i class="bi bi-check-all"></i></p>
              </div>
            </div>
            <div class="card float-end mt-3 w-75 bg-opacity-25 bg-danger">
              <div class="card-body">
                <i class="bi bi-person-circle"></i> Username
                <p class="mt-2">This is the message that was sent by the user on their side</p>
              </div>
              <div class="card-footer sh-card-ticket-footer bg-transparent border-0 ">
                <p class="sh-time">06.24 pm <i class="bi bi-check-all"></i></p>
              </div>
            </div>
           <div class="sh-ticket-footer d-flex col-12 pt-3 justify-content-between">
             <input class="form-control" placeholder="Enter your message here" v-on:keyup.enter="login">
             <a class="sh-send text-dark fs-5 mt-2"><i class="bi bi-send me-3 sh-send"></i></a>
           </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.sh-ticket{
  font-family: "Inter", sans-serif;
  font-size: 90%;
  box-sizing: inherit !important;
}
*, *::before, *::after {
  box-sizing: inherit !important;
}
.sh-time{
  font-size: 80%;
}

.sh-ul{
  list-style: none;
  padding: 0;
  margin: auto;
}
.sh-card-ticket-footer{
  margin-bottom: -1rem;
}

.sh-ticket-item{
  padding-right:2rem;
  /*margin-right:2rem;*/
}
.sh-send{
  transform: rotate(45deg);
  font-size: 180%;
}

</style>
