<template>
  <div class="main-content-container">
    <div>
      <h3 class="font-semibold text-2xl">Yearly Report</h3>
      <div class="flex justify-between">
        <div>
          <div class="flex space-x-1">
            <div class="w-[15px] h-[15px] rounded-sm bg-[#95B2CB]"></div>
            <p class="text-sm">{{ percentage.achieved }}% achieved</p>
          </div>
          <div class="flex space-x-1">
            <div class="w-[15px] h-[15px] rounded-sm bg-[#FECAC8]"></div>
            <p class="text-sm">{{ percentage.not_achieve }}% not achieved</p>
          </div>
        </div>
        <div class="flex space-x-3">
          <button><i class="i-fas-paper-plane block"></i></button>
          <button><i class="i-fas-download block"></i></button>
          <button><i class="i-fas-filter block"></i></button>
        </div>
      </div>
    </div>
    <hr />

    <div class="table-container">
      <table class="table">
        <thead>
          <tr class="basic-table-row">
            <th class="basic-table-head"></th>
            <th v-for="category in weekly" :key="category.category_id" class="basic-table-head">
              {{ category.category }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 5" :key="item">
            <td class="w-[60px] inline-block">week {{ item }}</td>
            <td v-for="category in weekly" :key="category.category_id">
              <div
                v-if="category.resolutions.weekly_goals[item - 1].is_complete == true"
                class="w-full h-full basic-table-body bg-[#95B2CB] rounded-md"
              ></div>
              <div
                v-if="category.resolutions.weekly_goals[item - 1].is_complete == false"
                class="w-full h-full basic-table-body bg-[#FECAC8] rounded-md"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref({
  achieved: 80,
  not_achieve: 20
})

const weekly = ref([
  {
    category_id: 'GhtHVSB12NHGBSGHgg',
    category: 'Finance',
    resolutions: {
      id: 'GhtHVSB12NHGBSGHgg',
      resolution: 'nabung 10 juta',
      due_date: '',
      is_complete: true,
      weekly_goals: [
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-07T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-14T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-21T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-28T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-09-05T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        }
      ]
    }
  },
  {
    category_id: 'GhtHVSB12NHGBSGHgg',
    category: 'Education',
    resolutions: {
      id: 'GhtHVSB12NHGBSGHgg',
      resolution: 'nabung 10 juta',
      due_date: '',
      is_complete: false,
      weekly_goals: [
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-07T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-14T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-21T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-28T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-09-05T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        }
      ]
    }
  },
  {
    category_id: 'GhtHVSB12NHGBSGHgg',
    category: 'Healthy',
    resolutions: {
      id: 'GhtHVSB12NHGBSGHgg',
      resolution: 'nabung 10 juta',
      due_date: '',
      is_complete: false,
      weekly_goals: [
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-07T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-14T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-21T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-28T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-09-05T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        }
      ]
    }
  },
  {
    category_id: 'GhtHVSB12NHGBSGHgg',
    category: 'Healthy',
    resolutions: {
      id: 'GhtHVSB12NHGBSGHgg',
      resolution: 'nabung 10 juta',
      due_date: '',
      is_complete: false,
      weekly_goals: [
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-07T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-14T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-21T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-28T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-09-05T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        }
      ]
    }
  },
  {
    category_id: 'GhtHVSB12NHGBSGHgg',
    category: 'Healthy',
    resolutions: {
      id: 'GhtHVSB12NHGBSGHgg',
      resolution: 'nabung 10 juta',
      due_date: '',
      is_complete: false,
      weekly_goals: [
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-07T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-14T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-21T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-08-28T14:15:22Z',
          is_complete: true,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        },
        {
          id: 'GhtHVSB12NHGBSGHgg',
          due_date: '2019-09-05T14:15:22Z',
          is_complete: false,
          goals: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet?'
        }
      ]
    }
  }
])
</script>
