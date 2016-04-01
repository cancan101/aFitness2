const EXERCISES = [
  {
    "id": 2,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
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
    "name": "Dip"
  },
  {
    "id": 3,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "Squat"
  },
  {
    "id": 5,
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "Shoulder press dumbell"
  },
  {
    "id": 6,
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "Shoulder raises"
  },
  {
    "id": 8,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "name": "Calf raise - leg press machine"
  },
  {
    "id": 10,
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "Chest press dumbell"
  },
  {
    "id": 11,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "Tricep extension lying barbell"
  },
  {
    "id": 12,
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "Chest press barbell narrow"
  },
  {
    "id": 13,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "Bicep curl barbell"
  },
  {
    "id": 15,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "Pullups wide"
  },
  {
    "id": 16,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "Bicep curl machine cable"
  },
  {
    "id": 17,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "Lat pulldown machine"
  },
  {
    "id": 18,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "name": "Seated leg press"
  },
  {
    "id": 19,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "name": "Leg curl seated"
  },
  {
    "id": 20,
    "image": "ab_machine",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "ab crunch machine"
  },
  {
    "id": 21,
    "image": "ab_crunch_on_a_ball",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "ab crunch on a ball"
  },
  {
    "id": 22,
    "image": "abdominal_reverse_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "abdominal reverse curl"
  },
  {
    "id": 23,
    "image": "abdominal_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "abdominal twist"
  },
  {
    "id": 24,
    "image": "alternating_seated_calf_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "alternating seated calf raise"
  },
  {
    "id": 25,
    "image": "angled_prone_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "angled prone curl"
  },
  {
    "id": 26,
    "image": "angled_prone_reverse_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "angled prone reverse curl"
  },
  {
    "id": 27,
    "image": "arnold_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "name": "arnold press"
  },
  {
    "id": 28,
    "image": "assisted_dumbbell_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "assisted dumbbell lunge"
  },
  {
    "id": 29,
    "image": "assisted_pull_up",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "assisted pull-up"
  },
  {
    "id": 30,
    "image": "back_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "back raise"
  },
  {
    "id": 31,
    "image": "back_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "back squat"
  },
  {
    "id": 32,
    "image": "bar_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bar crunch"
  },
  {
    "id": 33,
    "image": "bar_military_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "bar military press"
  },
  {
    "id": 34,
    "image": "bar_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "bar squat"
  },
  {
    "id": 35,
    "image": "bar_upright_row",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "bar upright row"
  },
  {
    "id": 36,
    "image": "barbell_behind_neck_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "barbell behind neck press"
  },
  {
    "id": 37,
    "image": "barbell_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "barbell bench press"
  },
  {
    "id": 38,
    "image": "barbell_bent_over_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "barbell bent-over row"
  },
  {
    "id": 39,
    "image": "barbell_cable_rollout",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "barbell cable rollout"
  },
  {
    "id": 40,
    "image": "barbell_crossover_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell crossover lunge"
  },
  {
    "id": 41,
    "image": "barbell_front_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "barbell front raise"
  },
  {
    "id": 42,
    "image": "barbell_hack_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell hack squat"
  },
  {
    "id": 43,
    "image": "barbell_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell lunge"
  },
  {
    "id": 44,
    "image": "barbell_overhead_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell overhead squat"
  },
  {
    "id": 45,
    "image": "barbell_rollout",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "barbell rollout"
  },
  {
    "id": 46,
    "image": "barbell_side_bend",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "barbell side bend"
  },
  {
    "id": 47,
    "image": "barbell_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell squat"
  },
  {
    "id": 48,
    "image": "barbell_standing_calf_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell standing calf raise"
  },
  {
    "id": 49,
    "image": "barbell_sumo_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "barbell sumo deadlift"
  },
  {
    "id": 50,
    "image": "beginner_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "beginner squat"
  },
  {
    "id": 51,
    "image": "bench_dip",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "bench dip"
  },
  {
    "id": 52,
    "image": "bench_leg_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bench leg raise"
  },
  {
    "id": 53,
    "image": "bench_side_bridge",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bench side bridge"
  },
  {
    "id": 54,
    "image": "bent_over_row_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
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
    "name": "bent over row (no weights)"
  },
  {
    "id": 55,
    "image": "bicycle_kick",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "bicycle kick"
  },
  {
    "id": 56,
    "image": "bosu_crossover_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "bosu crossover lunge"
  },
  {
    "id": 57,
    "image": "bosu_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu crunch"
  },
  {
    "id": 58,
    "image": "bosu_jump_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "bosu jump squat"
  },
  {
    "id": 59,
    "image": "kneeling_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "bosu kneeling pushup"
  },
  {
    "id": 60,
    "image": "bosu_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "bosu lunge"
  },
  {
    "id": 61,
    "image": "bosu_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu pushup"
  },
  {
    "id": 62,
    "image": "bosu_russian_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "bosu russian twist"
  },
  {
    "id": 63,
    "image": "bosu_side_bridge",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "bosu side bridge"
  },
  {
    "id": 64,
    "image": "bosu_sit_up",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu sit-up"
  },
  {
    "id": 65,
    "image": "bridge_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bridge crunch"
  },
  {
    "id": 66,
    "image": "bulgarian_split_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "bulgarian split squat"
  },
  {
    "id": 67,
    "image": "bulgarian_split_squat_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "bulgarian split squat (no weights)"
  },
  {
    "id": 68,
    "image": "cable_biceps_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "cable biceps curl"
  },
  {
    "id": 69,
    "image": "cable_chest_flye",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 8
      }
    ],
    "name": "cable chest flye"
  },
  {
    "id": 70,
    "image": "cable_chest_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "cable chest press"
  },
  {
    "id": 71,
    "image": "cable_close_grip_pulldown",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "cable close grip pulldown"
  },
  {
    "id": 72,
    "image": "cable_crossover",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "cable crossover"
  },
  {
    "id": 73,
    "image": "cable_front_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "cable front raise"
  },
  {
    "id": 74,
    "image": "cable_front_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "cable front squat"
  },
  {
    "id": 75,
    "image": "cable_hamstring_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "cable hamstring curl"
  },
  {
    "id": 76,
    "image": "cable_kneeling_twisting_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "cable kneeling twisting crunch"
  },
  {
    "id": 77,
    "image": "cable_leg_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "cable leg extension"
  },
  {
    "id": 78,
    "image": "cable_rear_lateral_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "cable rear lateral raise"
  },
  {
    "id": 79,
    "image": "cable_seated_close_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
        "muscle_id": 8
      }
    ],
    "name": "cable seated close row"
  },
  {
    "id": 80,
    "image": "cable_seated_high_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "cable seated high row"
  },
  {
    "id": 81,
    "image": "cable_seated_low_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
        "muscle_id": 8
      }
    ],
    "name": "cable seated low row"
  },
  {
    "id": 82,
    "image": "cable_side_lateral_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "cable side lateral raise"
  },
  {
    "id": 83,
    "image": "cable_standing_close_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
        "muscle_id": 8
      }
    ],
    "name": "cable standing close row"
  },
  {
    "id": 84,
    "image": "cable_standing_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "cable standing crunch"
  },
  {
    "id": 85,
    "image": "cable_straight_arm_pull_down",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "cable straight arm pull-down"
  },
  {
    "id": 86,
    "image": "cable_torso_rotation",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "cable torso rotation"
  },
  {
    "id": 87,
    "image": "cable_triceps_overhead_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "cable triceps overhead extension"
  },
  {
    "id": 88,
    "image": "cable_triceps_pushdown",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "cable triceps pushdown"
  },
  {
    "id": 89,
    "image": "cable_woodchopper",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "cable woodchopper"
  },
  {
    "id": 90,
    "image": "calf_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "calf raise"
  },
  {
    "id": 91,
    "image": "chair_dip_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "chair dip (no weights)"
  },
  {
    "id": 92,
    "image": "chinup",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "chinup"
  },
  {
    "id": 93,
    "image": "clam",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "clam"
  },
  {
    "id": 94,
    "image": "concentration_dumbbell_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "concentration dumbbell curl"
  },
  {
    "id": 95,
    "image": "corkscrew",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "corkscrew"
  },
  {
    "id": 96,
    "image": "crunch_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "crunch twist"
  },
  {
    "id": 97,
    "image": "cycle_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "cycle crunch"
  },
  {
    "id": 98,
    "image": "dead_lift",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dead lift"
  },
  {
    "id": 99,
    "image": "decline_close_grip_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "decline close-grip bench press"
  },
  {
    "id": 100,
    "image": "decline_dumbbell_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "decline dumbbell bench press"
  },
  {
    "id": 101,
    "image": "decline_dumbbell_fly",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "decline dumbbell fly"
  },
  {
    "id": 102,
    "image": "decline_leg_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "name": "decline leg curl"
  },
  {
    "id": 103,
    "image": "decline_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "decline pushup"
  },
  {
    "id": 104,
    "image": "decline_twisting_ab_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "decline twisting ab crunch"
  },
  {
    "id": 105,
    "image": "diamond_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "diamond pushup"
  },
  {
    "id": 106,
    "image": "dip",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "dip"
  },
  {
    "id": 107,
    "image": "dive_bomber_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "dive-bomber pushup"
  },
  {
    "id": 108,
    "image": "drag_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "drag curl"
  },
  {
    "id": 109,
    "image": "dumbbell_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "dumbbell bench press"
  },
  {
    "id": 110,
    "image": "dumbbell_bench_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "dumbbell bench twist"
  },
  {
    "id": 111,
    "image": "dumbbell_one_arm_bent_over_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
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
    "name": "dumbbell bent-over row"
  },
  {
    "id": 112,
    "image": "dumbbell_biceps_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "dumbbell biceps curl"
  },
  {
    "id": 113,
    "image": "dumbbell_calf_jump",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dumbbell calf jump"
  },
  {
    "id": 114,
    "image": "dumbbell_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "dumbbell deadlift"
  },
  {
    "id": 115,
    "image": "dumbbell_flye",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "dumbbell flye"
  },
  {
    "id": 116,
    "image": "dumbbell_front_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "dumbbell front raise"
  },
  {
    "id": 117,
    "image": "dumbbell_front_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dumbbell front squat"
  },
  {
    "id": 118,
    "image": "dumbbell_incline_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "dumbbell incline bench press"
  },
  {
    "id": 119,
    "image": "dumbbell_lateral_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "dumbbell lateral raise"
  },
  {
    "id": 120,
    "image": "dumbbell_leg_lift",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "dumbbell leg lift"
  },
  {
    "id": 121,
    "image": "dumbbell_barbell_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dumbbell lunge"
  },
  {
    "id": 122,
    "image": "dumbbell_pull_over",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
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
    "name": "dumbbell pull-over"
  },
  {
    "id": 123,
    "image": "dumbbell_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "dumbbell pushup"
  },
  {
    "id": 124,
    "image": "dumbbell_reverse_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "dumbbell reverse curl"
  },
  {
    "id": 125,
    "image": "dumbbell_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dumbbell reverse lunge"
  },
  {
    "id": 126,
    "image": "dumbbell_romanian_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "dumbbell romanian deadlift"
  },
  {
    "id": 127,
    "image": "row_kickback",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "dumbbell row kickback"
  },
  {
    "id": 128,
    "image": "dumbbell_shoulder_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "dumbbell shoulder press"
  },
  {
    "id": 129,
    "image": "side_bend",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "dumbbell side bend"
  },
  {
    "id": 130,
    "image": "dumbbell_single_leg_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "dumbbell single-leg deadlift"
  },
  {
    "id": 131,
    "image": "dumbbell_snatch",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "dumbbell snatch"
  },
  {
    "id": 132,
    "image": "dumbbell_toe_touch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "dumbbell toe touch"
  },
  {
    "id": 133,
    "image": "dumbbell_torso_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "dumbbell torso twist"
  },
  {
    "id": 134,
    "image": "dumbbell_upright_row",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "dumbbell upright row"
  },
  {
    "id": 135,
    "image": "wrist_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "name": "dumbbell wrist twist"
  },
  {
    "id": 136,
    "image": "external_rotation_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "external rotation (no weights)"
  },
  {
    "id": 137,
    "image": "figure_8_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "figure-8 crunch"
  },
  {
    "id": 138,
    "image": "french_press",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "french press"
  },
  {
    "id": 139,
    "image": "front_plate_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "front plate raise"
  },
  {
    "id": 140,
    "image": "front_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "front squat"
  },
  {
    "id": 141,
    "image": "goblet_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "goblet squat"
  },
  {
    "id": 142,
    "image": "golf_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "golf squat"
  },
  {
    "id": 143,
    "image": "good_morning",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "good morning"
  },
  {
    "id": 144,
    "image": "hack_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "name": "hack squat"
  },
  {
    "id": 145,
    "image": "hammer_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "hammer curl"
  },
  {
    "id": 146,
    "image": "hanging_knee_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "hanging knee raise"
  },
  {
    "id": 147,
    "image": "hanging_leg_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "hanging leg raise"
  },
  {
    "id": 148,
    "image": "high_pull",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "high pull"
  },
  {
    "id": 149,
    "image": "high_woodchopper",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "high woodchopper"
  },
  {
    "id": 150,
    "image": "incline_barbell_bench_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "incline barbell bench press"
  },
  {
    "id": 151,
    "image": "incline_dumbbell_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "incline dumbbell curl"
  },
  {
    "id": 152,
    "image": "incline_dumbbell_fly",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "incline dumbbell fly"
  },
  {
    "id": 153,
    "image": "incline_hammer_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "incline hammer curl"
  },
  {
    "id": 154,
    "image": "incline_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "incline pushup"
  },
  {
    "id": 155,
    "image": "inclined_reverse_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "incline reverse crunch"
  },
  {
    "id": 156,
    "image": "incline_reverse_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 6
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "incline reverse curl"
  },
  {
    "id": 157,
    "image": "incline_shoulder_rotation",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "incline shoulder rotation"
  },
  {
    "id": 158,
    "image": "incline_y_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "incline y raise"
  },
  {
    "id": 159,
    "image": "jackknife",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "jackknife"
  },
  {
    "id": 160,
    "image": "kettlebell_clean",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
        "muscle_id": 13
      }
    ],
    "name": "kettlebell clean"
  },
  {
    "id": 161,
    "image": "kettlebell_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "kettlebell crunch"
  },
  {
    "id": 162,
    "image": "kettlebell_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "kettlebell curl"
  },
  {
    "id": 163,
    "image": "kettlebell_french_press",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell french press"
  },
  {
    "id": 164,
    "image": "kettlebell_high_pull",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
        "muscle_id": 13
      }
    ],
    "name": "kettllebell high pull"
  },
  {
    "id": 165,
    "image": "kettlebell_kickback",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell kickback"
  },
  {
    "id": 166,
    "image": "kettlebell_overhead_press",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell overhead press"
  },
  {
    "id": 167,
    "image": "kettlebell_pullover",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell pullover"
  },
  {
    "id": 168,
    "image": "kettlebell_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "kettlebell pushup"
  },
  {
    "id": 169,
    "image": "kettlebell_rear_delt_row",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "kettlebell rear delt row"
  },
  {
    "id": 170,
    "image": "kettlebell_renegade_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "kettlebell renegade row"
  },
  {
    "id": 171,
    "image": "kettlebell_russian_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "kettlebell russian twist"
  },
  {
    "id": 172,
    "image": "kettlebell_side_bend",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "kettlebell side bend"
  },
  {
    "id": 173,
    "image": "kettlebell_straight_leg_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "kettlebell straight-leg deadlift"
  },
  {
    "id": 174,
    "image": "kettlebell_upright_row",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "kettlebell upright row"
  },
  {
    "id": 175,
    "image": "kettlebells_bent_over_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "kettlebells bent-over-row"
  },
  {
    "id": 176,
    "image": "kettlebells_side_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "kettlebells side lunge"
  },
  {
    "id": 177,
    "image": "kettlebells_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "kettlebells squat"
  },
  {
    "id": 178,
    "image": "kneeling_cable_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "kneeling cable crunch"
  },
  {
    "id": 179,
    "image": "lat_pulldown",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "lat pulldown"
  },
  {
    "id": 180,
    "image": "lunging_step_up",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "lunging step up"
  },
  {
    "id": 181,
    "image": "lying_hip_extension_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "lying hip extension (no weights)"
  },
  {
    "id": 182,
    "image": "lying_one_arm_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying one-arm extension"
  },
  {
    "id": 183,
    "image": "lying_pullover",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying pullover"
  },
  {
    "id": 184,
    "image": "lying_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying triceps extension"
  },
  {
    "id": 185,
    "image": "machine_biceps_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "machine biceps curl"
  },
  {
    "id": 186,
    "image": "machine_chest_flye",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "machine chest flye"
  },
  {
    "id": 187,
    "image": "machine_chest_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "machine chest press"
  },
  {
    "id": 188,
    "image": "machine_lateral_pull_down",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "machine lateral pull-down"
  },
  {
    "id": 189,
    "image": "machine_lateral_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "machine lateral raise"
  },
  {
    "id": 190,
    "image": "machine_leg_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "machine leg curl"
  },
  {
    "id": 191,
    "image": "machine_leg_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "name": "machine leg extension"
  },
  {
    "id": 192,
    "image": "machine_leg_press",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "machine leg press"
  },
  {
    "id": 193,
    "image": "machine_rear_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "machine rear raise"
  },
  {
    "id": 194,
    "image": "machine_shoulder_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "machine shoulder press"
  },
  {
    "id": 195,
    "image": "machine_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "machine triceps extension"
  },
  {
    "id": 196,
    "image": "medicine_ball_toe_touch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "medicine ball toe touch"
  },
  {
    "id": 197,
    "image": "modified_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "modified pushup"
  },
  {
    "id": 198,
    "image": "modified_v_sit",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "modified v-sit"
  },
  {
    "id": 199,
    "image": "neutral_grip_pullup",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "neutral-grip pullup"
  },
  {
    "id": 200,
    "image": "oblique_vup",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "oblique v-up"
  },
  {
    "id": 201,
    "image": "offset_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "offset squat"
  },
  {
    "id": 202,
    "image": "one_arm_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "one-arm row"
  },
  {
    "id": 203,
    "image": "overhead_bar_press",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "overhead bar press"
  },
  {
    "id": 204,
    "image": "overhead_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "overhead triceps extension"
  },
  {
    "id": 205,
    "image": "prallel_bar_dip",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "parallel bar dip"
  },
  {
    "id": 206,
    "image": "power_clean",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "power clean"
  },
  {
    "id": 207,
    "image": "prisoner_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "prisoner squat"
  },
  {
    "id": 208,
    "image": "prone_cobra",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "prone cobra"
  },
  {
    "id": 209,
    "image": "prone_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "prone curl"
  },
  {
    "id": 210,
    "image": "prone_hammer_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "prone hammer curl"
  },
  {
    "id": 211,
    "image": "prone_reverse_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "prone reverse curl"
  },
  {
    "id": 212,
    "image": "pulse_up",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "pulse up"
  },
  {
    "id": 213,
    "image": "push_press",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "push press"
  },
  {
    "id": 214,
    "image": "pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "pushup"
  },
  {
    "id": 215,
    "image": "rear_lateral_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "rear lateral raise"
  },
  {
    "id": 216,
    "image": "resistance_band_biceps_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "resistance band biceps curl"
  },
  {
    "id": 217,
    "image": "resistance_band_close_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
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
    "name": "resistance band close row"
  },
  {
    "id": 218,
    "image": "resistance_band_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "resistance band crunch"
  },
  {
    "id": 219,
    "image": "resistance_band_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "resistance band curl"
  },
  {
    "id": 220,
    "image": "resistance_band_hip_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "resistance band hip raise"
  },
  {
    "id": 221,
    "image": "resistance_band_kneeling_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "resistance band kneeling crunch"
  },
  {
    "id": 222,
    "image": "resistance_band_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "resistance band lunge"
  },
  {
    "id": 223,
    "image": "resistance_band_overhead_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "resistance band overhead press"
  },
  {
    "id": 224,
    "image": "resistance_band_overhead_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "resistance band overhead triceps extension"
  },
  {
    "id": 225,
    "image": "resistance_band_push_up",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "resistance band push up"
  },
  {
    "id": 226,
    "image": "resistance_band_shrug",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "resistance band shrug"
  },
  {
    "id": 227,
    "image": "reverse_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "reverse crunch"
  },
  {
    "id": 228,
    "image": "reverse_hyperextension",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "reverse hyperextension"
  },
  {
    "id": 229,
    "image": "reverse_wrist_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "name": "reverse wrist curl"
  },
  {
    "id": 230,
    "image": "rollback",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "rollback"
  },
  {
    "id": 231,
    "image": "romanian_barbell_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "romanian barbell deadlift"
  },
  {
    "id": 232,
    "image": "romanian_deadlift",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "romanian deadlift"
  },
  {
    "id": 233,
    "image": "rotational_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "rotational pushup"
  },
  {
    "id": 234,
    "image": "rotator_cuff_external",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "name": "rotator cuff - external"
  },
  {
    "id": 235,
    "image": "rotator_cuff_internal",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "name": "rotator cuff - internal"
  },
  {
    "id": 236,
    "image": "saxon_side_bend",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "saxon side bend"
  },
  {
    "id": 237,
    "image": "scaption",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "scaption"
  },
  {
    "id": 238,
    "image": "seated_bent_over_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "name": "seated bent over row"
  },
  {
    "id": 239,
    "image": "seated_dumbbell_shoulder_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "seated dumbbell shoulder press"
  },
  {
    "id": 240,
    "image": "seated_front_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "seated front raise"
  },
  {
    "id": 241,
    "image": "seated_jacknife",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "seated jackknife"
  },
  {
    "id": 242,
    "image": "seated_preacher_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "seated preacher curl"
  },
  {
    "id": 243,
    "image": "seated_reverse_fly",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
    "name": "seated reverse fly"
  },
  {
    "id": 244,
    "image": "seated_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "seated triceps extension"
  },
  {
    "id": 245,
    "image": "seated_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "seated twist"
  },
  {
    "id": 246,
    "image": "shrug",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      }
    ],
    "name": "shrug"
  },
  {
    "id": 247,
    "image": "side_bridge",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "side bridge"
  },
  {
    "id": 248,
    "image": "side_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "side crunch"
  },
  {
    "id": 249,
    "image": "side_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "side lunge"
  },
  {
    "id": 250,
    "image": "single_arm_external_rotation",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 12
      },
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "name": "single-arm external rotation"
  },
  {
    "id": 251,
    "image": "single_arm_pulldown",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "single-arm pulldown"
  },
  {
    "id": 252,
    "image": "single_leg_decline_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "single-leg decline pushup"
  },
  {
    "id": 253,
    "image": "single_leg_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "single-leg squat"
  },
  {
    "id": 254,
    "image": "single_leg_standing_calf_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "single-leg standing calf raise"
  },
  {
    "id": 255,
    "image": "situp",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "situp"
  },
  {
    "id": 256,
    "image": "ski_squat_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "ski squat (no weights)"
  },
  {
    "id": 257,
    "image": "sprinter",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "sprinter"
  },
  {
    "id": 258,
    "image": "stabilizing_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "stabilizing pushup"
  },
  {
    "id": 259,
    "image": "standing_biceps_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "standing biceps curl"
  },
  {
    "id": 260,
    "image": "standing_concentration_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "standing concentration curl"
  },
  {
    "id": 261,
    "image": "standing_calf_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "standing dumbbell calf raise"
  },
  {
    "id": 262,
    "image": "standing_scarecrow",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "standing scarecrow"
  },
  {
    "id": 263,
    "image": "standing_oblique_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "standing oblique crunch"
  },
  {
    "id": 264,
    "image": "standing_torso_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "standing torso twist"
  },
  {
    "id": 265,
    "image": "standing_triceps_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "standing triceps extension"
  },
  {
    "id": 266,
    "image": "standing_wrist_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "name": "standing wrist curl"
  },
  {
    "id": 267,
    "image": "steam_engine",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "steam engine"
  },
  {
    "id": 268,
    "image": "sumo_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "sumo squat"
  },
  {
    "id": 269,
    "image": "superman",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
        "muscle_id": 9
      }
    ],
    "name": "superman"
  },
  {
    "id": 270,
    "image": "swiss_ball_close_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
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
    "name": "swiss-ball close row"
  },
  {
    "id": 271,
    "image": "swiss_ball_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "swiss-ball crunch"
  },
  {
    "id": 272,
    "image": "swiss_ball_french_press",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "swiss-ball french press"
  },
  {
    "id": 273,
    "image": "swiss_ball_front_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "swiss-ball front raise"
  },
  {
    "id": 274,
    "image": "swiss_ball_glute_bridge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "swiss-ball glute bridge"
  },
  {
    "id": 275,
    "image": "swiss_ball_kickback",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "swiss-ball kickback"
  },
  {
    "id": 276,
    "image": "swiss_ball_leg_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "swiss-ball leg curl"
  },
  {
    "id": 277,
    "image": "swiss_ball_oblique_back_extension",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 13
      },
      {
        "is_primary": 0,
        "muscle_id": 8
      }
    ],
    "name": "swiss-ball oblique back extension"
  },
  {
    "id": 278,
    "image": "swiss_ball_oblique_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "swiss-ball oblique crunch"
  },
  {
    "id": 279,
    "image": "swiss_ball_pike_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "swiss-ball pike pushup"
  },
  {
    "id": 280,
    "image": "swiss_ball_preacher_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "swiss-ball preacher curl"
  },
  {
    "id": 281,
    "image": "swiss_ball_press",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "swiss-ball press"
  },
  {
    "id": 282,
    "image": "swiss_ball_pullover",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
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
    "name": "swiss-ball pullover"
  },
  {
    "id": 283,
    "image": "swiss_ball_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "swiss-ball pushup"
  },
  {
    "id": 284,
    "image": "swiss_ball_reverse_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "swiss-ball reverse crunch"
  },
  {
    "id": 285,
    "image": "swiss_ball_seated_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 3
      },
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "swiss-ball seated curl"
  },
  {
    "id": 286,
    "image": "swiss_ball_shoulder_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      },
      {
        "is_primary": 0,
        "muscle_id": 4
      }
    ],
    "name": "swiss-ball shoulder press"
  },
  {
    "id": 287,
    "image": "swiss_ball_shrug",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "swiss-ball shrug"
  },
  {
    "id": 288,
    "image": "swiss_ball_split_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
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
    "name": "swiss-ball split squat"
  },
  {
    "id": 289,
    "image": "swiss_ball_torso_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "swiss-ball torso twist"
  },
  {
    "id": 290,
    "image": "swiss_ball_trunk_rotation",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "swiss-ball trunk rotation"
  },
  {
    "id": 291,
    "image": "swiss_ball_wall_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "swiss-ball wall squat"
  },
  {
    "id": 292,
    "image": "t_bar_bent_over_row",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
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
    "name": "t-bar bent-over row"
  },
  {
    "id": 293,
    "image": "t_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "t-pushup"
  },
  {
    "id": 294,
    "image": "toe_touch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "toe touch"
  },
  {
    "id": 295,
    "image": "towel_fly_no_weight",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "towel fly (no weights)"
  },
  {
    "id": 296,
    "image": "traditional_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "traditional crunch"
  },
  {
    "id": 297,
    "image": "triceps_assisted_dip",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "triceps assisted dip"
  },
  {
    "id": 298,
    "image": "triceps_kickback",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "triceps kickback"
  },
  {
    "id": 299,
    "image": "twisting_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "twisting crunch"
  },
  {
    "id": 300,
    "image": "twisting_hip_raise",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "twisting hip raise"
  },
  {
    "id": 301,
    "image": "twisting_shoulder_press",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
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
    "name": "twisting shoulder press"
  },
  {
    "id": 302,
    "image": "twisting_windmill",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "twisting windmill"
  },
  {
    "id": 303,
    "image": "two_point_bridge",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
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
    "name": "two-point bridge"
  },
  {
    "id": 304,
    "image": "unilateral_high_cable_fly",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
    "name": "unilateral high cable fly"
  },
  {
    "id": 305,
    "image": "unilateral_low_cable_fly",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      },
      {
        "is_primary": 0,
        "muscle_id": 2
      }
    ],
    "name": "unilateral low cable fly"
  },
  {
    "id": 306,
    "image": "upright_row",
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
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
        "muscle_id": 2
      }
    ],
    "name": "upright row"
  },
  {
    "id": 307,
    "image": "v_up",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "v-up"
  },
  {
    "id": 308,
    "image": "walking_lunge",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "walking dumbbell lunge"
  },
  {
    "id": 309,
    "image": "walking_lunge_twist",
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
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
    "name": "walking lunge twist"
  },
  {
    "id": 310,
    "image": "weighted_chop",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "weighted chop"
  },
  {
    "id": 311,
    "image": "weighted_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
    "muscles": [
      {
        "is_primary": 0,
        "muscle_id": 9
      },
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "weighted crunch"
  },
  {
    "id": 312,
    "image": "weighted_pushup",
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
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
        "muscle_id": 4
      }
    ],
    "name": "weighted pushup"
  },
  {
    "id": 313,
    "image": "weighted_swiss_ball_crunch",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "weighted swiss-ball crunch"
  },
  {
    "id": 314,
    "image": "wheel_rollout",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "wheel rollout"
  },
  {
    "id": 315,
    "image": "wrist_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "name": "wrist curl"
  },
  {
    "id": 316,
    "image": "zercher_squat",
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
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
    "name": "zercher squat"
  },
  {
    "id": 317,
    "image": "zottman_curl",
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
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
    "name": "zottman curl"
  },
  {
    "id": 318,
    "image": "cycling",
    "muscle_groups": [],
    "muscles": [],
    "name": "cycling"
  },
  {
    "id": 319,
    "image": "elliptical",
    "muscle_groups": [],
    "muscles": [],
    "name": "elliptical"
  },
  {
    "id": 320,
    "image": "jogging",
    "muscle_groups": [],
    "muscles": [],
    "name": "jogging"
  },
  {
    "id": 321,
    "image": "jump_rope",
    "muscle_groups": [],
    "muscles": [],
    "name": "jump rope"
  },
  {
    "id": 322,
    "image": "rowing",
    "muscle_groups": [],
    "muscles": [],
    "name": "rowing"
  },
  {
    "id": 323,
    "image": "step_machine",
    "muscle_groups": [],
    "muscles": [],
    "name": "step machine"
  },
  {
    "id": 324,
    "image": "swimming",
    "muscle_groups": [],
    "muscles": [],
    "name": "swimming"
  },
  {
    "id": 325,
    "image": "treadmill",
    "muscle_groups": [],
    "muscles": [],
    "name": "treadmill"
  },
  {
    "id": 326,
    "image": "tennis",
    "muscle_groups": [],
    "muscles": [],
    "name": "tennis"
  },
  {
    "id": 327,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "Bicep curl dumbell inward"
  },
  {
    "id": 328,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 3
      }
    ],
    "name": "Bicep curl machine cable inverse"
  },
  {
    "id": 329,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      }
    ],
    "name": "Calf raise machine"
  },
  {
    "id": 330,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "name": "Outer thigh machine"
  },
  {
    "id": 331,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 15
      }
    ],
    "name": "Inner thigh machine"
  },
  {
    "id": 332,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "arm lift shrug"
  },
  {
    "id": 333,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "multi machine pulldown"
  },
  {
    "id": 334,
    "muscle_groups": [
      {
        "musclegroup_id": 6
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "machine rear delt"
  },
  {
    "id": 335,
    "image": "elevated_feet_plank",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "elevated-feet plank"
  },
  {
    "id": 336,
    "image": "inclined_plank",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "incline plank"
  },
  {
    "id": 337,
    "image": "kneeling_plank",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "kneeling plank"
  },
  {
    "id": 338,
    "image": "plank",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "plank"
  },
  {
    "id": 339,
    "image": "side_plank",
    "muscle_groups": [
      {
        "musclegroup_id": 4
      }
    ],
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
    "name": "side plank"
  },
  {
    "id": 340,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "machine mid row"
  },
  {
    "id": 341,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "machine low row"
  },
  {
    "id": 342,
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "Kinesis chest press"
  },
  {
    "id": 343,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "Kinesis arm curl"
  },
  {
    "id": 344,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "barbell reverse curl"
  },
  {
    "id": 345,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "name": "leg curl TechnoGym"
  },
  {
    "id": 346,
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "machine inline press"
  },
  {
    "id": 347,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "name": "calf extension"
  },
  {
    "id": 348,
    "muscle_groups": [
      {
        "musclegroup_id": 3
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "cable upright row"
  },
  {
    "id": 349,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "cable tricep pushdown kinesis"
  },
  {
    "id": 350,
    "muscle_groups": [
      {
        "musclegroup_id": 1
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "hoist pec fly"
  },
  {
    "id": 351,
    "muscle_groups": [
      {
        "musclegroup_id": 2
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "rocit bicep curl"
  },
  {
    "id": 352,
    "muscle_groups": [
      {
        "musclegroup_id": 5
      }
    ],
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "name": "hoist leg curl"
  }
];

export default EXERCISES;
