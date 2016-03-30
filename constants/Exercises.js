const EXERCISES = [
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 2,
    "name": "Dip"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 3,
    "name": "Squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 5,
    "name": "Shoulder press dumbell"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 6,
    "name": "Shoulder raises"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "id": 8,
    "name": "Calf raise - leg press machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 10,
    "name": "Chest press dumbell"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 11,
    "name": "Tricep extension lying barbell"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 12,
    "name": "Chest press barbell narrow"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 13,
    "name": "Bicep curl barbell"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 15,
    "name": "Pullups wide"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 16,
    "name": "Bicep curl machine cable"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 17,
    "name": "Lat pulldown machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "id": 18,
    "name": "Seated leg press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "id": 19,
    "name": "Leg curl seated"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/ab_machine_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 20,
    "name": "ab crunch machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/ab_crunch_on_a_ball_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 21,
    "name": "ab crunch on a ball"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/abdominal_reverse_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 22,
    "name": "abdominal reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/abdominal_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 23,
    "name": "abdominal twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/alternating_seated_calf_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 24,
    "name": "alternating seated calf raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/angled_prone_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 25,
    "name": "angled prone curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/angled_prone_reverse_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 26,
    "name": "angled prone reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/arnold_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 27,
    "name": "arnold press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/assisted_dumbbell_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 28,
    "name": "assisted dumbbell lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/assisted_pull_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 29,
    "name": "assisted pull-up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/back_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 30,
    "name": "back raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/back_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 31,
    "name": "back squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bar_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 32,
    "name": "bar crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/bar_military_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 33,
    "name": "bar military press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/bar_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 34,
    "name": "bar squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/bar_upright_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 35,
    "name": "bar upright row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/barbell_behind_neck_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 36,
    "name": "barbell behind neck press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/barbell_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 37,
    "name": "barbell bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/barbell_bent_over_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 38,
    "name": "barbell bent-over row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/barbell_cable_rollout_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 39,
    "name": "barbell cable rollout"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_crossover_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 40,
    "name": "barbell crossover lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/barbell_front_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 41,
    "name": "barbell front raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_hack_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 42,
    "name": "barbell hack squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 43,
    "name": "barbell lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_overhead_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 15
      }
    ],
    "id": 44,
    "name": "barbell overhead squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/barbell_rollout_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 45,
    "name": "barbell rollout"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/barbell_side_bend_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 46,
    "name": "barbell side bend"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 47,
    "name": "barbell squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_standing_calf_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 48,
    "name": "barbell standing calf raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/barbell_sumo_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 49,
    "name": "barbell sumo deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/beginner_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 50,
    "name": "beginner squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/bench_dip_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 51,
    "name": "bench dip"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bench_leg_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 52,
    "name": "bench leg raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bench_side_bridge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 53,
    "name": "bench side bridge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/bent_over_row_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 54,
    "name": "bent over row (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bicycle_kick_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 55,
    "name": "bicycle kick"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/bosu_crossover_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 56,
    "name": "bosu crossover lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bosu_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 57,
    "name": "bosu crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/bosu_jump_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 58,
    "name": "bosu jump squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/kneeling_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 59,
    "name": "bosu kneeling pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/bosu_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 60,
    "name": "bosu lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bosu_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 61,
    "name": "bosu pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bosu_russian_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 62,
    "name": "bosu russian twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bosu_side_bridge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 63,
    "name": "bosu side bridge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bosu_sit_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 64,
    "name": "bosu sit-up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/bridge_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 65,
    "name": "bridge crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/bulgarian_split_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 66,
    "name": "bulgarian split squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/bulgarian_split_squat_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 67,
    "name": "bulgarian split squat (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/cable_biceps_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 68,
    "name": "cable biceps curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/cable_chest_flye_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 69,
    "name": "cable chest flye"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/cable_chest_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 70,
    "name": "cable chest press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_close_grip_pulldown_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 71,
    "name": "cable close grip pulldown"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/cable_crossover_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 72,
    "name": "cable crossover"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/cable_front_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      }
    ],
    "id": 73,
    "name": "cable front raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/cable_front_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 74,
    "name": "cable front squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/cable_hamstring_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 15
      }
    ],
    "id": 75,
    "name": "cable hamstring curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/cable_kneeling_twisting_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 76,
    "name": "cable kneeling twisting crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/cable_leg_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 77,
    "name": "cable leg extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/cable_rear_lateral_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 78,
    "name": "cable rear lateral raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_seated_close_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 79,
    "name": "cable seated close row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_seated_high_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 80,
    "name": "cable seated high row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_seated_low_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 81,
    "name": "cable seated low row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/cable_side_lateral_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 82,
    "name": "cable side lateral raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_standing_close_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 83,
    "name": "cable standing close row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/cable_standing_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 84,
    "name": "cable standing crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/cable_straight_arm_pull_down_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 85,
    "name": "cable straight arm pull-down"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/cable_torso_rotation_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 86,
    "name": "cable torso rotation"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/cable_triceps_overhead_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 87,
    "name": "cable triceps overhead extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/cable_triceps_pushdown_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 88,
    "name": "cable triceps pushdown"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/cable_woodchopper_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 89,
    "name": "cable woodchopper"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/calf_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 90,
    "name": "calf raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/chair_dip_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 91,
    "name": "chair dip (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/chinup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 92,
    "name": "chinup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/clam_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 93,
    "name": "clam"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/concentration_dumbbell_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 94,
    "name": "concentration dumbbell curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/corkscrew_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 95,
    "name": "corkscrew"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/crunch_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 96,
    "name": "crunch twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/cycle_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 97,
    "name": "cycle crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dead_lift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 98,
    "name": "dead lift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/decline_close_grip_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 99,
    "name": "decline close-grip bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/decline_dumbbell_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 100,
    "name": "decline dumbbell bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/decline_dumbbell_fly_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 101,
    "name": "decline dumbbell fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/decline_leg_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "id": 102,
    "name": "decline leg curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/decline_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 103,
    "name": "decline pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/decline_twisting_ab_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 104,
    "name": "decline twisting ab crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/diamond_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 105,
    "name": "diamond pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/dip_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 106,
    "name": "dip"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dive_bomber_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 107,
    "name": "dive-bomber pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/drag_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 108,
    "name": "drag curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dumbbell_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 109,
    "name": "dumbbell bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/dumbbell_bench_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 110,
    "name": "dumbbell bench twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/dumbbell_one_arm_bent_over_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 111,
    "name": "dumbbell bent-over row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/dumbbell_biceps_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 112,
    "name": "dumbbell biceps curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dumbbell_calf_jump_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 113,
    "name": "dumbbell calf jump"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/dumbbell_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 114,
    "name": "dumbbell deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dumbbell_flye_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 115,
    "name": "dumbbell flye"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/dumbbell_front_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      }
    ],
    "id": 116,
    "name": "dumbbell front raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dumbbell_front_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 117,
    "name": "dumbbell front squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dumbbell_incline_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 118,
    "name": "dumbbell incline bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/dumbbell_lateral_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 119,
    "name": "dumbbell lateral raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/dumbbell_leg_lift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 120,
    "name": "dumbbell leg lift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dumbbell_barbell_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 121,
    "name": "dumbbell lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dumbbell_pull_over_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 122,
    "name": "dumbbell pull-over"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/dumbbell_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 123,
    "name": "dumbbell pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/dumbbell_reverse_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 124,
    "name": "dumbbell reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dumbbell_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 125,
    "name": "dumbbell reverse lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/dumbbell_romanian_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 126,
    "name": "dumbbell romanian deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/row_kickback_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 127,
    "name": "dumbbell row kickback"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/dumbbell_shoulder_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 128,
    "name": "dumbbell shoulder press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/side_bend_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 129,
    "name": "dumbbell side bend"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/dumbbell_single_leg_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 130,
    "name": "dumbbell single-leg deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/dumbbell_snatch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 131,
    "name": "dumbbell snatch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/dumbbell_toe_touch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 132,
    "name": "dumbbell toe touch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/dumbbell_torso_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 133,
    "name": "dumbbell torso twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/dumbbell_upright_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 134,
    "name": "dumbbell upright row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/wrist_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "id": 135,
    "name": "dumbbell wrist twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/external_rotation_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 136,
    "name": "external rotation (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/figure_8_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 137,
    "name": "figure-8 crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/french_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 138,
    "name": "french press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/front_plate_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 139,
    "name": "front plate raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/front_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 140,
    "name": "front squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/goblet_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 141,
    "name": "goblet squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/golf_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 142,
    "name": "golf squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/good_morning_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 143,
    "name": "good morning"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/hack_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "id": 144,
    "name": "hack squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/hammer_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 145,
    "name": "hammer curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/hanging_knee_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 146,
    "name": "hanging knee raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/hanging_leg_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 147,
    "name": "hanging leg raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/high_pull_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 148,
    "name": "high pull"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/high_woodchopper_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 149,
    "name": "high woodchopper"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/incline_barbell_bench_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 150,
    "name": "incline barbell bench press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/incline_dumbbell_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 151,
    "name": "incline dumbbell curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/incline_dumbbell_fly_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 152,
    "name": "incline dumbbell fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/incline_hammer_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 153,
    "name": "incline hammer curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/incline_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 154,
    "name": "incline pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/inclined_reverse_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 155,
    "name": "incline reverse crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/incline_reverse_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 156,
    "name": "incline reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/incline_shoulder_rotation_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 157,
    "name": "incline shoulder rotation"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/incline_y_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 158,
    "name": "incline y raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/jackknife_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 159,
    "name": "jackknife"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/kettlebell_clean_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 160,
    "name": "kettlebell clean"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/kettlebell_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 161,
    "name": "kettlebell crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/kettlebell_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 162,
    "name": "kettlebell curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/kettlebell_french_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 163,
    "name": "kettlebell french press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/kettlebell_high_pull_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 164,
    "name": "kettllebell high pull"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/kettlebell_kickback_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 165,
    "name": "kettlebell kickback"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/kettlebell_overhead_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 166,
    "name": "kettlebell overhead press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/kettlebell_pullover_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 167,
    "name": "kettlebell pullover"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/kettlebell_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 168,
    "name": "kettlebell pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/kettlebell_rear_delt_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 169,
    "name": "kettlebell rear delt row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/kettlebell_renegade_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 170,
    "name": "kettlebell renegade row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/kettlebell_russian_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 171,
    "name": "kettlebell russian twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/kettlebell_side_bend_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 172,
    "name": "kettlebell side bend"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/kettlebell_straight_leg_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 173,
    "name": "kettlebell straight-leg deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/kettlebell_upright_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 174,
    "name": "kettlebell upright row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/kettlebells_bent_over_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 175,
    "name": "kettlebells bent-over-row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/kettlebells_side_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 176,
    "name": "kettlebells side lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/kettlebells_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 177,
    "name": "kettlebells squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/kneeling_cable_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 178,
    "name": "kneeling cable crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/lat_pulldown_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 179,
    "name": "lat pulldown"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/lunging_step_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 180,
    "name": "lunging step up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/lying_hip_extension_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 181,
    "name": "lying hip extension (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/lying_one_arm_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 182,
    "name": "lying one-arm extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/lying_pullover_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 183,
    "name": "lying pullover"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/lying_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 184,
    "name": "lying triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/machine_biceps_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 185,
    "name": "machine biceps curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/machine_chest_flye_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 186,
    "name": "machine chest flye"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/machine_chest_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 187,
    "name": "machine chest press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/machine_lateral_pull_down_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 188,
    "name": "machine lateral pull-down"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/machine_lateral_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      }
    ],
    "id": 189,
    "name": "machine lateral raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/machine_leg_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 190,
    "name": "machine leg curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/machine_leg_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "id": 191,
    "name": "machine leg extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/machine_leg_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 15
      }
    ],
    "id": 192,
    "name": "machine leg press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/machine_rear_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 193,
    "name": "machine rear raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/machine_shoulder_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 19
      }
    ],
    "id": 194,
    "name": "machine shoulder press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/machine_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 195,
    "name": "machine triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/medicine_ball_toe_touch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 196,
    "name": "medicine ball toe touch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/modified_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 197,
    "name": "modified pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/modified_v_sit_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 198,
    "name": "modified v-sit"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/neutral_grip_pullup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 199,
    "name": "neutral-grip pullup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/oblique_vup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 200,
    "name": "oblique v-up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/offset_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 201,
    "name": "offset squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/one_arm_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 202,
    "name": "one-arm row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/overhead_bar_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 203,
    "name": "overhead bar press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/overhead_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 204,
    "name": "overhead triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/prallel_bar_dip_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 205,
    "name": "parallel bar dip"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/power_clean_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 206,
    "name": "power clean"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/prisoner_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 207,
    "name": "prisoner squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/prone_cobra_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 208,
    "name": "prone cobra"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/prone_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 209,
    "name": "prone curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/prone_hammer_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 0,
        "muscle_id": 5
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 210,
    "name": "prone hammer curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/prone_reverse_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 211,
    "name": "prone reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/pulse_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 212,
    "name": "pulse up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/push_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 213,
    "name": "push press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 214,
    "name": "pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/rear_lateral_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 18
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 215,
    "name": "rear lateral raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/resistance_band_biceps_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 216,
    "name": "resistance band biceps curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/resistance_band_close_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 217,
    "name": "resistance band close row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/resistance_band_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 218,
    "name": "resistance band crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/resistance_band_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 219,
    "name": "resistance band curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/resistance_band_hip_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 220,
    "name": "resistance band hip raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/resistance_band_kneeling_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 221,
    "name": "resistance band kneeling crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/resistance_band_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 222,
    "name": "resistance band lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/resistance_band_overhead_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 223,
    "name": "resistance band overhead press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/resistance_band_overhead_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 224,
    "name": "resistance band overhead triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/resistance_band_push_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 225,
    "name": "resistance band push up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/resistance_band_shrug_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 226,
    "name": "resistance band shrug"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/reverse_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 227,
    "name": "reverse crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/reverse_hyperextension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 228,
    "name": "reverse hyperextension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/reverse_wrist_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "id": 229,
    "name": "reverse wrist curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/rollback_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 230,
    "name": "rollback"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/romanian_barbell_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 231,
    "name": "romanian barbell deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/romanian_deadlift_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 232,
    "name": "romanian deadlift"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/rotational_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 233,
    "name": "rotational pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/rotator_cuff_external_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "id": 234,
    "name": "rotator cuff - external"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/rotator_cuff_internal_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "id": 235,
    "name": "rotator cuff - internal"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/saxon_side_bend_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 236,
    "name": "saxon side bend"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/scaption_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 237,
    "name": "scaption"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/seated_bent_over_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 238,
    "name": "seated bent over row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/seated_dumbbell_shoulder_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 18
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 239,
    "name": "seated dumbbell shoulder press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/seated_front_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 240,
    "name": "seated front raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/seated_jacknife_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 241,
    "name": "seated jackknife"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/seated_preacher_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 242,
    "name": "seated preacher curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/seated_reverse_fly_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 18
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 243,
    "name": "seated reverse fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/seated_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 244,
    "name": "seated triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/seated_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 245,
    "name": "seated twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/shrug_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      }
    ],
    "id": 246,
    "name": "shrug"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/side_bridge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 247,
    "name": "side bridge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/side_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 248,
    "name": "side crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/side_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 249,
    "name": "side lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/single_arm_external_rotation_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "id": 250,
    "name": "single-arm external rotation"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/single_arm_pulldown_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 251,
    "name": "single-arm pulldown"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/single_leg_decline_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 252,
    "name": "single-leg decline pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/single_leg_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      }
    ],
    "id": 253,
    "name": "single-leg squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/single_leg_standing_calf_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 254,
    "name": "single-leg standing calf raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/situp_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 255,
    "name": "situp"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/ski_squat_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 256,
    "name": "ski squat (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/sprinter_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 257,
    "name": "sprinter"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/stabilizing_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 258,
    "name": "stabilizing pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/standing_biceps_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 259,
    "name": "standing biceps curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/standing_concentration_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 260,
    "name": "standing concentration curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/standing_calf_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      }
    ],
    "id": 261,
    "name": "standing dumbbell calf raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/standing_scarecrow_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 262,
    "name": "standing scarecrow"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/standing_oblique_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 263,
    "name": "standing oblique crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/standing_torso_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 264,
    "name": "standing torso twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/standing_triceps_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 265,
    "name": "standing triceps extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/standing_wrist_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "id": 266,
    "name": "standing wrist curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/steam_engine_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 267,
    "name": "steam engine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/sumo_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 268,
    "name": "sumo squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/superman_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 269,
    "name": "superman"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/swiss_ball_close_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 270,
    "name": "swiss-ball close row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/swiss_ball_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 271,
    "name": "swiss-ball crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/swiss_ball_french_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 272,
    "name": "swiss-ball french press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/swiss_ball_front_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 273,
    "name": "swiss-ball front raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/swiss_ball_glute_bridge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 274,
    "name": "swiss-ball glute bridge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/swiss_ball_kickback_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 275,
    "name": "swiss-ball kickback"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/swiss_ball_leg_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 276,
    "name": "swiss-ball leg curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/swiss_ball_oblique_back_extension_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "id": 277,
    "name": "swiss-ball oblique back extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/swiss_ball_oblique_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 278,
    "name": "swiss-ball oblique crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/swiss_ball_pike_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 279,
    "name": "swiss-ball pike pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/swiss_ball_preacher_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 280,
    "name": "swiss-ball preacher curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/swiss_ball_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 281,
    "name": "swiss-ball press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/swiss_ball_pullover_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 282,
    "name": "swiss-ball pullover"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/swiss_ball_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 283,
    "name": "swiss-ball pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/swiss_ball_reverse_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 284,
    "name": "swiss-ball reverse crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/swiss_ball_seated_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 285,
    "name": "swiss-ball seated curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/swiss_ball_shoulder_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 286,
    "name": "swiss-ball shoulder press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/swiss_ball_shrug_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 287,
    "name": "swiss-ball shrug"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/swiss_ball_split_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 17
      },
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "id": 288,
    "name": "swiss-ball split squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/swiss_ball_torso_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 289,
    "name": "swiss-ball torso twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/swiss_ball_trunk_rotation_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 290,
    "name": "swiss-ball trunk rotation"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/swiss_ball_wall_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 291,
    "name": "swiss-ball wall squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/t_bar_bent_over_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 292,
    "name": "t-bar bent-over row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/t_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 293,
    "name": "t-pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/toe_touch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 294,
    "name": "toe touch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/towel_fly_no_weight_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 295,
    "name": "towel fly (no weights)"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/traditional_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 296,
    "name": "traditional crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/triceps_assisted_dip_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 297,
    "name": "triceps assisted dip"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/triceps_kickback_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 298,
    "name": "triceps kickback"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/twisting_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 299,
    "name": "twisting crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/twisting_hip_raise_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 300,
    "name": "twisting hip raise"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/twisting_shoulder_press_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      }
    ],
    "id": 301,
    "name": "twisting shoulder press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/twisting_windmill_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "id": 302,
    "name": "twisting windmill"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/two_point_bridge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 303,
    "name": "two-point bridge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/unilateral_high_cable_fly_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      }
    ],
    "id": 304,
    "name": "unilateral high cable fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/unilateral_low_cable_fly_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 305,
    "name": "unilateral low cable fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": require('../img/upright_row_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "id": 306,
    "name": "upright row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/v_up_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 307,
    "name": "v-up"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/walking_lunge_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 308,
    "name": "walking dumbbell lunge"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": require('../img/walking_lunge_twist_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 11
      }
    ],
    "id": 309,
    "name": "walking lunge twist"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/weighted_chop_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 13
      }
    ],
    "id": 310,
    "name": "weighted chop"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/weighted_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "id": 311,
    "name": "weighted crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": require('../img/weighted_pushup_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "id": 312,
    "name": "weighted pushup"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/weighted_swiss_ball_crunch_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 313,
    "name": "weighted swiss-ball crunch"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/wheel_rollout_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 314,
    "name": "wheel rollout"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/wrist_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "id": 315,
    "name": "wrist curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": require('../img/zercher_squat_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 16
      },
      {
        "is_primary": 0,
        "muscle_id": 10
      }
    ],
    "id": 316,
    "name": "zercher squat"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": require('../img/zottman_curl_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": -1
      },
      {
        "is_primary": 0,
        "muscle_id": 5
      },
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 317,
    "name": "zottman curl"
  },
  {
    "muscle_groups": [],
    "image": require('../img/cycling_t.jpg'),
    "muscles": [],
    "id": 318,
    "name": "cycling"
  },
  {
    "muscle_groups": [],
    "image": require('../img/elliptical_t.jpg'),
    "muscles": [],
    "id": 319,
    "name": "elliptical"
  },
  {
    "muscle_groups": [],
    "image": require('../img/jogging_t.jpg'),
    "muscles": [],
    "id": 320,
    "name": "jogging"
  },
  {
    "muscle_groups": [],
    "image": require('../img/jump_rope_t.jpg'),
    "muscles": [],
    "id": 321,
    "name": "jump rope"
  },
  {
    "muscle_groups": [],
    "image": require('../img/rowing_t.jpg'),
    "muscles": [],
    "id": 322,
    "name": "rowing"
  },
  {
    "muscle_groups": [],
    "image": require('../img/step_machine_t.jpg'),
    "muscles": [],
    "id": 323,
    "name": "step machine"
  },
  {
    "muscle_groups": [],
    "image": require('../img/swimming_t.jpg'),
    "muscles": [],
    "id": 324,
    "name": "swimming"
  },
  {
    "muscle_groups": [],
    "image": require('../img/treadmill_t.jpg'),
    "muscles": [],
    "id": 325,
    "name": "treadmill"
  },
  {
    "muscle_groups": [],
    "image": require('../img/tennis_t.jpg'),
    "muscles": [],
    "id": 326,
    "name": "tennis"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 327,
    "name": "Bicep curl dumbell inward"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      }
    ],
    "id": 328,
    "name": "Bicep curl machine cable inverse"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      }
    ],
    "id": 329,
    "name": "Calf raise machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "id": 330,
    "name": "Outer thigh machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      }
    ],
    "id": 331,
    "name": "Inner thigh machine"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 332,
    "name": "arm lift shrug"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 333,
    "name": "multi machine pulldown"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "id": 334,
    "name": "machine rear delt"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/elevated_feet_plank_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 335,
    "name": "elevated-feet plank"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/inclined_plank_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 336,
    "name": "incline plank"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/kneeling_plank_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 337,
    "name": "kneeling plank"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/plank_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      },
      {
        "is_primary": 0,
        "muscle_id": 9
      }
    ],
    "id": 338,
    "name": "plank"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "image": require('../img/side_plank_t.jpg'),
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      },
      {
        "is_primary": 0,
        "muscle_id": 14
      }
    ],
    "id": 339,
    "name": "side plank"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 340,
    "name": "machine mid row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 341,
    "name": "machine low row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 342,
    "name": "Kinesis chest press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 343,
    "name": "Kinesis arm curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 344,
    "name": "barbell reverse curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "id": 345,
    "name": "leg curl TechnoGym"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 346,
    "name": "machine inline press"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "id": 347,
    "name": "calf extension"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "id": 348,
    "name": "cable upright row"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "id": 349,
    "name": "cable tricep pushdown kinesis"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "id": 350,
    "name": "hoist pec fly"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "id": 351,
    "name": "rocit bicep curl"
  },
  {
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "image": null,
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "id": 352,
    "name": "hoist leg curl"
  }
];

export default EXERCISES;
