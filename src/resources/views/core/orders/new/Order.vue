<script setup>
import {useUserStore, ShForm, ShTable, ShTabs } from '@iankibetsh/shframework'
import { ref } from 'vue'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()


const pages = ref(0)
const source = ref(0)
const charts = ref(0)
const powerpoint = ref(0)

const {user} = storeToRefs(userStore)


</script>
<template>
  <h5 class="p-2 ">Place new order</h5>
  <div class="row ms-2">
    <div class="col-10 card shadow p-3">
      <form class="" style="font-family: 'Inter', sans-serif">
        <div class="row mb-3">
          <label class="col-sm-3 mt-3 orders-label">Academic Level:</label>
          <div class="col-sm-9 p-2">
            <button type="button" class="btn button-orders">High School</button>
            <button type="button" class="btn button-orders">Masters</button>
            <button type="button" class="btn button-orders">College</button>
            <button type="button" class="btn button-orders">Undergraduate</button>
            <button type="button" class="btn button-orders">PhD</button>
          </div>
        </div>
        <div class="row mb-3">
          <label for="text" class="col-md-3 col-sm-12 orders-label">Type of Service:</label>
          <div class="col-md-9 col-sm-12">
            <select class="form-select orders-input" aria-label="Default select example">
              <option selected>Writting from scratch</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="text" class="col-md-3 col-sm-12 orders-label">Subject:</label>
          <div class="col-sm-9">
            <select class="form-select orders-input">
              <option selected>Healthcare and Lifescience</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="text" class="col-md-3 col-sm-12 orders-label">Type of Paper:</label>
          <div class="col-md-9">
            <select class="form-select orders-input" aria-label="Default select example">
              <option selected>Essay</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="text" class="col-md-3 col-sm-12 orders-label">Topic:</label>
          <div class="col-md-9 col-sm-12">
            <input type="text" class="w-100 p-2 form-control orders-input" placeholder="Enter your topic here">
          </div>
        </div>
        <div class="row mb-3">
          <label for="text" class="col-md-3 col-sm-12 orders-label">Paper Instructions:</label>
          <div class="col-md-9 col-sm-12">
            <TEXTAREA class="form-control orders-input" id="exampleFormControlTextarea1" rows="3" placeholder="Type in the paper instructions">
            </TEXTAREA>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-md-4 orders-label">Paper Format:</label>
          <div class="col-md-9 col-sm-12">
            <button type="button" class="btn button-orders">APA</button>
            <button type="button" class="btn button-orders">MLA</button>
            <button type="button" class="btn button-orders">Harvard</button>
            <button type="button" class="btn button-orders">Chicago</button>
            <button type="button" class="btn button-orders">Other</button>
            <button type="button" class="btn button-orders">Turabian</button>
            <button type="button" class="btn button-orders">Vancouver</button>
            <button type="button" class="btn button-orders">CBE</button>
            <button type="button" class="btn button-orders">AGLC</button>
            <button type="button" class="btn button-orders">Oscola</button>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-2 orders-label mb-1">Additional Materials:</label>
          <div class="col-md-9 col-sm-12">
            <button class="btn btn-primary bg-opacity-25 text-start"><i class="bi bi-cloud-arrow-up"></i> Upload Files
              <input class="form-control orders-choose" type="file" id="formFile"></button>
            <br>
            <small class="text-capitalize">upload your files here</small>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-4 orders-label">Deadline:</label>
          <div class="col-md-9 col-sm-12">
            <button type="button" class="btn button-orders">14 Days</button>
            <button type="button" class="btn button-orders">10 Days</button>
            <button type="button" class="btn button-orders">7 Days</button>
            <button type="button" class="btn button-orders">5 Days</button>
            <button type="button" class="btn button-orders">3 Days</button>
            <button type="button" class="btn button-orders">36 Hours</button>
            <button type="button" class="btn button-orders">24 Hours</button>
            <button type="button" class="btn button-orders">12 Hours</button>
            <button type="button" class="btn button-orders">6 Hours</button>
          </div>
        </div>
        <div class="row mb-3 ">
          <label  class="col-md-3 col-sm-12 mt-2 mb-sm-2 orders-label">Pages: </label>
          <div class="d-flex col-md-9 col-sm-12 justify-content-between w-50">
            <div class="input-group  d-flex justify-content-evenly w-50">
              <button @click="pages--" class="btn btn-primary order-group">-</button>
              <p class="mt-1">{{ pages }}</p>
              <button @click="pages++" class="btn btn-primary order-group">+</button>
            </div>
            <div class="dropdown orders-dropdown">
              <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Spacing
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Double Spaced</a></li>
                <li><a class="dropdown-item" href="#">Single Spaced</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-2 mb-sm-2 orders-label">Reference/Sources:</label>
          <div class="col-md-9 col-sm-12 justify-content-between w-50">
            <div class="input-group  d-flex justify-content-evenly  w-50">
              <button @click="source--" class="btn btn-primary order-group ">-</button>
              <p class="mt-1">{{ source }}</p>
              <button @click="source++" class="btn btn-primary order-group">+</button>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-2 orders-label mb-sm-2">Charts:</label>
          <div class="col-md-9 justify-content-between w-50">
            <div class="input-group  d-flex justify-content-evenly  w-50">
              <button @click="charts--" class="btn btn-primary order-group ">-</button>
              <p class="mt-1">{{ charts }}</p>
              <button @click="charts++" class="btn btn-primary order-group">+</button>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-2 orders-label mb-sm-2">Power Point Slides:</label>
          <div class="col-md-9 col-sm-12 justify-content-between w-50">
            <div class="input-group  d-flex justify-content-evenly w-50">
              <button @click="powerpoint--" class="btn btn-primary order-group ">-</button>
              <p class="mt-1">{{ powerpoint}}</p>
              <button @click="powerpoint++" class="btn btn-primary order-group">+</button>
            </div>
          </div>
        </div>


        <fieldset class="row mb-3">
          <legend class="col-form-label col-md-3 pt-0 orders-label">Additional Features: </legend>
          <div class="col-md-9 orders-input">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label" for="gridCheck1">
               Urgent writters assign
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label" for="gridCheck1">
             Originality report
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label" for="gridCheck1">
                 Include abstract
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row mb-3">
          <label  class="col-md-3 col-sm-12 mt-2 orders-label mb-2">Writter Category:</label>
          <div class="col-md-9 col-sm-12 justify-content-between">
            <div class="row orders-input">
                <div class="col-md-4 col-sm-12 mb-2 text-wrap ">
                  <a href=""  class="text-decoration-none ">
                    <div class="card orders-card">
                      <div class="card-body text-center">
                        <h5 class="orders-title mt-5">STANDARD</h5>
                        <p>STANDARD PRICE</p>
                      </div>
                    </div>
                  </a>
                </div>
              <div class="col-md-4 col-sm-12 mb-2 text-wrap">
                <a href=""  class="text-decoration-none ">
                  <div class="card orders-card">
                    <div class="card-body text-center">
                      <h5 class="orders-title">INTERMIDIATE +20%</h5>
                      <p>HIGH RANK PROFFESIONAL WRITTER,PROFFICIENT IN THE REQUESTED FIELD OF STUDY</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4 col-sm-12  text-wrap">
                <a href=""  class="text-decoration-none ">
                  <div class="card orders-card">
                    <div class="card-body text-center">
                      <h5 class="orders-title">SENIOR +30%</h5>
                      <p>ENGLISH AS A NATIVE LANGUAGE WRITER (US,UK,AU &CA WRITERS)</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3" >
          <label  class="col-md-3 col-sm-12 mb-sm-2 mt-2 orders-label">Your phone:</label>
          <div class="col-md-9 col-sm-12 justify-content-between w-50 orders-input">
              <input id="phone" type="tel" name="phone" />
          </div>
        </div>
        <div class="row mb-3">
          <label  class="col-md-3 mt-2 orders-label">Your Email:</label>
          <div class="col-md-9 col-sm-12 justify-content-between w-50 orders-input">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text text-dark">We will use this to create an account that you can use to track
                and manage your order and notifications.</div>

          </div>
        </div>
        <button type="submit" class="btn btn-primary"><i class="bi bi-eye-fill"></i> Preview</button>
    </form>
    </div>
    <div class="col-2">

    </div>
  </div>

</template>
<style lang="scss">
.button-orders{
  font-size: 90%;
  color: #696666;
  border: none;
}
.button-orders:hover,
.button-orders:active,
.button-orders:focus{
  color: dodgerblue;
  border-bottom: 2px solid dodgerblue;
  border-radius: 0px;
}

.orders-label{
  font-size:90%;
  color:darkslategray;
  padding-left:1.5rem;
  text-align-last: end;
}
.orders-input{
  height: 90%;
  color: #3a3939;
  font-size: 90%;
}
.orders-choose{
 opacity: 0;
  margin-top: -2rem;
}
.order-group{
  height: 70%;
}
.orders-card {
  height: 100%;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 90%;

}
.orders-card:hover,
.orders-card:focus,
.orders-card:active{
  background: dodgerblue;
  color: white;
  .orders-title{
    border-bottom: 2px solid white;

    font-size: 120%;
  }
}
.orders-title{
  border-bottom: 3px solid dodgerblue;
  font-size: 120%;
}
@media only screen and (max-width: 830px) {
  .orders-label{
    font-size:90%;
    color:darkslategray;
    padding-left:1.5rem;
    text-align-last: start;
    font-stretch: inherit;
  }
  .orders-input{
    width: 100% !important;
  }
  .input-group{
    width: 100% !important;
  }
  .orders-dropdown{
    display: none;
  }
}
</style>
