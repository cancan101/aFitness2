const EXERCISES = [
  {
    "id": 2,
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
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 11
      }
    ],
    "name": "Leg curl seated"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Sit in position with back against the pad, feet locked behind the feet pads, and reach overhead to grab the handles.\n\nSTEP 2. Pull on the handles while lifting with your feet, but most of the power should come from contracting your abdominal muscles.\n\nSTEP 3. In a well controlled manner, return to starting position gradually as you focus on releasing your tightened abs.",
    "difficulty": "Beginner",
    "id": 20,
    "image": "ab_machine",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "ab crunch machine",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Obliques": {}
      }
    },
    "description": "The basic movements of this exercise develop the strength of the abdominal muscles, while the use of the ball helps increase stability.\n\nSTEP 1. Slowly roll down onto the ball, letting your spine follow its curve, and place your head and neck in a comfortable position on its back. Place your hands at the sides of your head and position your feet hip-distance apart.\n\nSTEP 2. Draw your abdominal muscles, then exhale and curl your entire spine up, starting from the neck. Flex at your torso until the distance between the top of your pelvis and the bottom of your ribs stops shortening.",
    "difficulty": "Beginner",
    "id": 21,
    "image": "ab_crunch_on_a_ball",
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
    "name": "ab crunch on a ball",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "This exercise works the lower of your abdominal muscle and when performed correctly can eliminate the use of other muscles to cheat the movement.\n\nSTEP 1. Lie flat on a bench and reach back to hold on to the underside of the bench behind your head. Bend your legs at the knee, raising your feet off the bench so that your knees are over your hips.\n\nSTEP 2. Slowly draw your abdominal muscles toward your spine, then slowly exhale and push your spine into the bench - start with your lower back and make the movement flow up your spine until your hips roll up off the bench.\n\nSTEP 3. Imagine that the bench is made of soft plastic and try to leave an imprint of your spine in it.\n\nSTEP 4. When you have rolled the full length of your spine, inhale slowly and return to the starting position, pushing your spine into the bench as you roll back down.",
    "difficulty": "Advanced",
    "id": 22,
    "image": "abdominal_reverse_curl",
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
    "name": "abdominal reverse curl",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back, extend your legs straight up, and place your hands out to your sides at the level of your shoulders.\n\nSTEP 2. While keeping your upper body stable, roll your legs downward toward one side - bringing your feet toward the floor.\n\nSTEP 3. Roll your legs back up to the starting position and toward the opposite side. Then, return to the upright position again.",
    "difficulty": "Beginner",
    "id": 23,
    "image": "abdominal_twist",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "abdominal twist",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "STEP 1. Sit down, place a step in front of your bench, and hold a pair of dumbbells. Place one dumbbell on each knee while setting the balls of both your feet on the step. Without touching the floor, lower both heels as far as you can.\n\nSTEP 2. While pushing off the ball of your left foot, lift your left heel as high as you can. Then, as you lower your left heel to the starting position, raise your right heel.\n\nSTEP 3. Alternate between the above until you finish the set.",
    "difficulty": "Beginner",
    "id": 24,
    "image": "alternating_seated_calf_raise",
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
    "name": "alternating seated calf raise",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Incline a bench toward the 45-degree angle mark. Grab two dumbbells with an underhand grip (as illustrated) and lean against the bench.\n\nSTEP 2. Curl the weights slowly straight up. Your wrists should always be fixed, resist twisting them, and keep your upper arms perpendicular to the floor.",
    "difficulty": "Intermediate",
    "id": 25,
    "image": "angled_prone_curl",
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
    "name": "angled prone curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Set an incline bench to 45-degree angle and grab a pair of dumbbells with an overhand grip. Have your arms hanging and your palms facing back.\n\nSTEP 2. Curl both dumbbells up as high as you can without moving your upper arms.\n\nSTEP 3. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 26,
    "image": "angled_prone_reverse_curl",
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
    "name": "angled prone reverse curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Sit on a flat bench and hold a pair of dumbbells at the level of your shoulders. Your palms should be facing inward, and your elbows should point to the side, not forward, as illustrated.\n\nSTEP 2. Press upward with the dumbbells, while rotating them at the same time so that your palms end up facing outward at the top. While pressing the dumbbells up and rotating your hands, remember to pull the dumbbells toward each other without locking your elbows.\n\nSTEP 3. Pause at the top most position, then lower the dumbbells to the starting position through the same path you took in raising them.",
    "difficulty": "Intermediate",
    "id": 27,
    "image": "arnold_press",
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
    "name": "arnold press",
    "target1": "shoulders",
    "target2": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Stand upright about 2-3 feet in front of a bench, with a dumbbell held in each hand. Extend your right foot backward and rest the top of your foot on the bench.\n\nSTEP 2. Keep your back straight and your head held up as you slowly bend your left leg and lower yourself into a lunge position. Stop lowering yourself when your left thigh is roughly parallel to the floor.\n\nSTEP 3. Slowly press yourself back up until your left leg is straight once more, and repeat. Remember to switch legs and give your other leg a workout as well.",
    "difficulty": "Beginner",
    "id": 28,
    "image": "assisted_dumbbell_lunge",
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
    "name": "assisted dumbbell lunge",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "This is an excellent exercise for the whole back that can be performed by people of any ability. It also works the biceps muscles and forearm muscles very effectively, so it can be used as part of an arm workout.\n\nSTEP 1. Choose a suitable weight, then kneel or stand on the platform and grip the handles. Keep you abdominals and lower back muscles strong and slowly extend your arms until they are fully stretched. Make sure that you keep your shoulders down and retracted slightly back - this will help to keep the tension on your back muscles.\n\nSTEP 2. Keeping the movement under control and your elbows pulled down and back, pull yourself back up to the start position. Repeat for the desired number of reps.",
    "difficulty": "Intermediate",
    "id": 29,
    "image": "assisted_pull_up",
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
    "name": "assisted pull-up",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Position yourself into a back-extension station by placing your feet under the leg brace/anchor so that it is hooked there.\n\nSTEP 2. With your upper thighs resting on the bad, lock your hands behind your head and bend forward at the hips until your upper body is just short of being 90 degrees to the floor.\n\nSTEP 3. Slowly raise your torso until it's in line with your lower body, then lower it. Alternatively, you can hold onto a weight by bracing it with your arms across your chest and do the same motions.",
    "difficulty": "Beginner",
    "id": 30,
    "image": "back_raise",
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
    "name": "back raise",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "This exercise is an effective one for developing leg strength and also works the upper-body stabilizing muscles. It requires a reasonable amount of strength and stability.\n\nSTEP 1. Stand with your feet hip-distance apart and with them facing forward and rest the bar on the back of your shoulders just above your shoulderblades. Pull your abdominal muscles in before starting the movement, but not so tightly that your breathing patterns are affected.\n\nSTEP 2. Inhale slowly and start the movement at your hips by pushing them out behind you in a sitting motion. Then allow your knees to bend, making sure that they do not travel forward over your toes.\n\nSTEP 3. Travel down until your knees are flexed at 90 degrees at a comfortable point, exhale slowly and push your body weight up through your heels to straighten your legs.",
    "difficulty": "Advanced",
    "id": 31,
    "image": "back_squat",
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
    "name": "back squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on a bench, knees bent, feet together, with an empty bar held above, shoulder-width apart.\n\nSTEP 2. Keep your elbows straight as you crunch up by lifting your upper back and shoulders off the bench. Keep the bar extended upward.\n\nSTEP 3. Slowly return to the start position and repeat.",
    "difficulty": "Beginner",
    "id": 32,
    "image": "bar_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bar crunch",
    "target1": "abdominals",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This is one of the most effective of all the shoulder-building exercises, and should be incorporated in workout programs of all levels once the correct movement has been mastered and feels comfortable.\n\nSTEP 1. Sit with your back on a bench that allows a steep incline - between 80\u00b0 and 90\u00b0. Grasp the barbell with an overhand (pronated) grip with your hands just a little wider than shoulder-width apart and rest it on your upper chest.\n\nSTEP 2. Brace your shoulders and back, then inhale and press the bar straight up, keeping your elbows slightly bent at the top.\n\nSTEP 3. To finish, lower back down to the start position, keeping your abdominals and lower back braced, then repeat for the desired number of reps.",
    "difficulty": "Intermediate",
    "id": 33,
    "image": "bar_military_press",
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
    "name": "bar military press",
    "target1": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Place an empty barbell bar across your upper back and stand with your feet hip-width apart.\n\nSTEP 2. Lower your hips until your thighs are parallel to the floor. Push back up a quarter of the way, pause, then go back down to parallel.\n\nSTEP 3. Pause again, then return to the start.",
    "difficulty": "Beginner",
    "id": 34,
    "image": "bar_squat",
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
    "name": "bar squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {},
        "Trapezius": {}
      }
    },
    "description": "This exercise works not only the shoulders but the trapezius (in the back), making it a good linking exercise between shoulders and back.\n\nSTEP 1. Stand with your feet slightly wider than a shoulder-width apart and take an overhand grip on a barbell with your hands also a shoulder-width apart.\n\nSTEP 2. Pull up to the level of your chin, keeping the bar close to your body and keeping your elbows higher than the bar.\n\nSTEP 3. Hold for a few seconds before lowering back to the start position, ensuring that your elbows remain slightly bent and avoiding any bouncing or jerking movements.",
    "difficulty": "Beginner",
    "id": 35,
    "image": "bar_upright_row",
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
    "name": "bar upright row",
    "target1": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Trapezius": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Standing upright, hold a barbell behind your head at shoulder height with your hands shoulder-width apart, elbows bent, and palms facing forward.\n\nSTEP 2. Press the barbell overhead, extending your arms fully. Keep your back straight and remain upright throughout the motion.",
    "difficulty": "Intermediate",
    "id": 36,
    "image": "barbell_behind_neck_press",
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
    "name": "barbell behind neck press",
    "target1": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise is excellent for building strength and muscle mass, but it is not suitable for a beginner - it should be regarded as a useful progression from Machine Chest Press. It works on the front of the shoulders and triceps as well as the chest.\n\nSTEP 1. Lie on your back with your feet supported either by a raised platform or the floor. Make sure that you do not over-extend your lower back and keep your buttocks in contract with the bench. Take an overhand grip on the bar, slightly wider than a shoulder-width apart. Inhale and push the bar off the rack (if there is one) then move it lower down to the midline of your chest.\n\nSTEP 2. Try to keep the bar, your wrists, elbows, and your shoulders working on the same line of axis - straight up and down.\n\nSTEP 3. Hold for a second then push the bar back up, making sure that you shoulders do not hunch forward away from the bench and that it is your triceps muscles and chest that are pushing.\n\nSTEP 4. Keep your upper body in contract with the bench as much as possible and keep your breathing rhythmical - exhale when you push the bar back up.",
    "difficulty": "Beginner",
    "id": 37,
    "image": "barbell_bench_press",
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
    "name": "barbell bench press",
    "target1": "chest",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. With your feet shoulder-width apart and your knees bent roughly 15 to 30 degrees, keep your torso straight with a slight arch in your back as you lean forward at the hips. Your torso should be, at this point, roughly parallel to the floor. Grab the barbell off the floor using a false overhand grip (thumbs should be in line with the rest of your fingers) that's slightly wider than shoulder width. Let this bar hang at arm's length in front of you.\n\nSTEP 2. Slowly retract your shoulder blades as to have the bar pull up to the lower part of your sternum. Try not to use your arm muscles, and focus on getting the most activity out of your middle-back muscles.\n\nSTEP 3. Pause at the top where your chest should be sticking out toward the bar. Then, slowly return to the starting position while keeping your torso in the same position throughout the movement. Remember that your bent knees should provide all of the suspension your torso requires to be steady.",
    "difficulty": "Beginner",
    "id": 38,
    "image": "barbell_bent_over_row",
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
    "name": "barbell bent-over row",
    "target1": "back",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Obliques": {}
      }
    },
    "description": "STEP 1. Place an ankle strap around the middle of the barbell and attach it to the low pulley. Select a light cable weight to begin.\n\nSTEP 2. Kneel with your back to the weights and the cable running between your legs. Grab the barbell with an overhand, shoulder-width grip, as illustrated.\n\nSTEP 3. Roll the bar away from you and follow its path with your arms straight. Go as far forward as you can go. The cable should help in pulling the weight back, but provides resistance to the negative portion of the exercise.\n\nSTEP 4. If you wish, you can try it it other way by kneeling on the opposite side of the bar, facing the weight stack, and feel the resistance as you pull it toward you, but none as you roll it out.",
    "difficulty": "Advanced",
    "id": 39,
    "image": "barbell_cable_rollout",
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
    "name": "barbell cable rollout",
    "target1": "abdominals",
    "type": "barbell machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Stand upright, feet shoulder-width apart, while holding a barbell on the back of your shoulders, as illustrated.\n\nSTEP 2. Step forward and place one leg across the other. Simultaneously, lower your body down and lean your torso slightly forward.\n\nSTEP 3. Push down on your front foot to raise your body back to starting position.",
    "difficulty": "Intermediate",
    "id": 40,
    "image": "barbell_crossover_lunge",
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
    "name": "barbell crossover lunge",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Hold a barbell with a full, overhand, shoulder-width grip, and stand with the barbell hanging in front of your thighs. Your feet should be shoulder-width apart with your knees slightly bent. Pull in your abs and tighten all your upper-body muscles, and slightly bend your elbows.\n\nSTEP 2. Raise the bar in front of you until your arms are parallel to the floor.\n\nSTEP 3. Pause, then return to the starting position.",
    "difficulty": "Intermediate",
    "id": 41,
    "image": "barbell_front_raise",
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
    "name": "barbell front raise",
    "target1": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Hold a barbell at arm's length behind your back, using an overhand grip. Set your feet shoulder-width apart and place each heel on a 25-pound weight plate.\n\nSTEP 2. Slowly lower your body as if you were sitting back into a chair, keeping your back in its natural alignment. When your upper thighs are parallel to the floor, pause, then return to the starting position.",
    "difficulty": "Intermediate",
    "id": 42,
    "image": "barbell_hack_squat",
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
    "name": "barbell hack squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Grab a barbell with an overhand grip, your hands slightly more than shoulder-width apart. Raise it over your head and lower it so it rests across the back of your shoulders. Spread your feet so they're shoulder-width apart.\n\nSTEP 2. Step forward as far as possible with your left leg until the top of your left thigh is almost parallel with the floor.\n\nSTEP 3. Step back to the starting position. Repeat with the other leg.",
    "difficulty": "Intermediate",
    "id": 43,
    "image": "barbell_lunge",
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
    "name": "barbell lunge",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Gastrocnemius": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Setup a barbell in the squat rack with the pins at shoulder height. Grab the barbell with a very wide grip, and press it overhead until your arms are straight.\n\nSTEP 2. Step back into a stance that is beyond shoulder width, with your feet angled out.\n\nSTEP 3. Take a deep breath and hold it as you push your hips back, keeping your chest up and your core as tight as possible. Squat down as far as your mobility allows while holding the bar overhead, or just behind your head, with your arms locked.\n\nSTEP 4. Stand up to the starting position and exhale.",
    "difficulty": "Expert",
    "id": 44,
    "image": "barbell_overhead_squat",
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
    "name": "barbell overhead squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Kneel on an exercise mat with your shoulders directly over a barbell loaded with 2.5kg plates. Use an overhand, shoulder-width grip.\n\nSTEP 2. Roll the bar out in front of you, keeping your arms straight and your knees in place as your hips, torso and arms go forward. Advance as far as you can without arching your back.\n\nSTEP 3. Pause, then pull back to the starting position.",
    "difficulty": "Beginner",
    "id": 45,
    "image": "barbell_rollout",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "barbell rollout",
    "target1": "abdominals",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Stand upright with your feet slightly wider than shoulder-width and hold a barbell behind your neck. Place the barbell so that it rests on your shoulders and trapezius muscles, as illustrated.\n\nSTEP 2. While holding on, bend to one side while keeping your legs and hips motionless. You should feel your abdominal obliques and lower back doing the work.\n\nSTEP 3. Return to starting position and bend the other way, then return to upright starting position once more.",
    "difficulty": "Beginner",
    "id": 46,
    "image": "barbell_side_bend",
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
    "name": "barbell side bend",
    "target1": "abdominals",
    "target2": "back",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Set the barbell on a squat rack on pins that are just below shoulder height. Duck your head under the bar, and set it on your upper back, as illustrated. Grab the bar using an overhand at a comfortable width and rotate your arms backward, lifting your elbows as high as they'll go to lock the bar into place on your back.\n\nSTEP 2. Lift the bar off the pins and take one step back. Set your feet so they're just wider than your shoulders and angled out slightly.\n\nSTEP 3. Take a deep breath and hold it as you push your hips back to start the squat. As you descend, focus on your hips, sitting back as if you're aiming for a chair behind you, and let your knees bend on their own.\n\nSTEP 4. Squat down as far as possible while keeping your core tight and your back in its natural arch. A good target is to get your upper thighs parallel to the floor, or slightly below that point.\n\nSTEP 5. Press down through your heels and push your upper back up into the bar as you return to starting position. Exhale when your hips and knees are straight.",
    "difficulty": "Expert",
    "id": 47,
    "image": "barbell_squat",
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
    "name": "barbell squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "STEP 1. A good sense of balance is required. Rest a light barbell across your traps, and stand on a low step with your heels off the edge. Keep your knees straight and your torso erect as you rise on the balls of your feet as high as you can.\n\nSTEP 2.Lower your heels as far past the level of the step as possible. Pause, then return to the starting position.",
    "difficulty": "Beginner",
    "id": 48,
    "image": "barbell_standing_calf_raise",
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
    "name": "barbell standing calf raise",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Position your feet under the barbell with a very wide stance. Squat down and grasp the bar with a shoulder-width grip.\n\nSTEP 2. Lift the bar by extending your hips and knees to full extension. During the motion, pull your shoulders back at the top of the lift.\n\nSTEP 3. Return and repeat. Throughout the lift, keep your hips low, shoulders high, and arms/back straight. Your knees should point in the same direction as your feet throughout the movement",
    "difficulty": "Advanced",
    "id": 49,
    "image": "barbell_sumo_deadlift",
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
    "name": "barbell sumo deadlift",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. While holding two dumbbells by your side at arm's length, keep your feet roughly a shoulder-width apart and pull your shoulder blades back.\n\nSTEP 2. Slowly bend your knees and lower your body. Stop when you find that your thighs are parallel to the floor.\n\nSTEP 3. It is important to keep your knees from moving forward past your toes and have your lower back in its natural arched alignment. Slowly return to the starting position in the same mannor.",
    "difficulty": "Beginner",
    "id": 50,
    "image": "beginner_squat",
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
    "name": "beginner squat",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Place your palms on a bench so they face forward, and position yourself as illustrated. keep your legs relatively straight out in front, with both heels firmly on the floor. Straighten your arms and move your torso forward so that your behind and back are just in front of the bench.\n\nSTEP 2. Bend your arms to right angles, lowering your behind toward the floor as shown. You can make the exercise easier by by bending your knees and moving your feet closer to the bench.",
    "difficulty": "Intermediate",
    "id": 51,
    "image": "bench_dip",
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
    "name": "bench dip",
    "target1": "arms",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on a bench with legs extended straight, and hold on to the top of the bench.\n\nSTEP 2. Raise your legs straight up, slightly lifting your lower back off the bench.\n\nSTEP 3. Hold for a few seconds, then lower your legs back down to the start positon. Keep your legs straight throughout the motion.",
    "difficulty": "beginner",
    "id": 52,
    "image": "bench_leg_raise",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bench leg raise",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your side and brace yourself against a bench with your arm, as illustrated. Keep your feet on the floor with legs straight and on top of one another.\n\nSTEP 2. Raise your body upward, focusing on keeping your body in a straight line and using your abdominal muscles to lift yourself. Your arms should mostly be used for support, not as a source of force.\n\nSTEP 3. Return to starting position.",
    "difficulty": "Beginner",
    "id": 53,
    "image": "bench_side_bridge",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bench side bridge",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Place a fairly heavy (ie. packed) suitcase before you - or anything else that is roughly the same. Stand with your legs normally apart, then bend over at your hips with your knees bent but keep your back flat. Grab the side of the bag.\n\nSTEP 2. Use your back and biceps to pull the suitcase up to your chest. Try to keep the suitcase close to your chest during the movement. Pause, then slowly return to the starting position.",
    "difficulty": "Beginner",
    "id": 54,
    "image": "bent_over_row_no_weight",
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
    "name": "bent over row (no weights)",
    "target1": "back",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back, and bend your knees at 90 degrees so that your thighs are pointing toward the ceiling. Place your hands behind your ears.\n\nSTEP 2. Pump your legs back and forth, as if riding a bicycle. Simultaneously, rotate your torso from side to side by moving an armpit, but not elbow, up toward the opposite knee.",
    "difficulty": "Intermediate",
    "id": 55,
    "image": "bicycle_kick",
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
    "name": "bicycle kick",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Stand upright in front of a BOSU with your arms extended straight downward by your side. The BOSU should be placed a couple steps in front of your standing position and to one side.\n\nSTEP 2. Step forward and sideways onto the BOSU, lowering your body downward so that you have a bend in your one knee, while keeping the trailing leg straight.\n\nSTEP 3. Push off of your bent foot to return to starting position and repeat. To make the exercise more challenging, hold a pair of dumbbells in each hand as you perform the routine.",
    "difficulty": "Intermediate",
    "id": 56,
    "image": "bosu_crossover_lunge",
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
    "name": "bosu crossover lunge",
    "target1": "legs",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Place a BOSU ball on the floor and lie with your back on it. Keep your knees bent, feet flat, and place your hands to the sides of your head.\n\nSTEP 2. Lift your head and shoulders off the BOSU, keeping your feet flat on the floor throughout the movement. Resist the urge to pull your head up with your hands - focus on using your abdominal and core muscles to do the work.\n\nSTEP 3. Lower to the starting position and repeat.",
    "difficulty": "Beginner",
    "id": 57,
    "image": "bosu_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu crunch",
    "target1": "abdominals",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Stand upright on a BOSU with your arms by your side.\n\nSTEP 2. Bend down at your hips and knees into a half-way squat position - lean your torso forward slightly for balance.\n\nSTEP 3. Jump straight upward by pushing off your feet in a controlled manner, trying to land back into a squat position on the BOSU. For added difficulty, hold a dumbbell in each hand.",
    "difficulty": "Beginner",
    "id": 58,
    "image": "bosu_jump_squat",
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
    "name": "bosu jump squat",
    "target1": "legs",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. While on your knees, place your hands on a BOSU turned upside-down. Keep your arms shoulder-width apart, elbows bent, and chest at near touching point with the BOSU. While your knees should be bent, make sure that your feet are up and not resting on the floor, as illustrated.\n\nSTEP 2. Push upward and raise yourself so that your arms are straight.\n\nSTEP 3. Lower your chest once more toward the BOSU. Repeat. Remember to keep your back flat throughout the movement.",
    "difficulty": "Beginner",
    "id": 59,
    "image": "kneeling_pushup",
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
    "name": "bosu kneeling pushup",
    "target1": "chest",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Stand upright in front of a BOSU with your arms extended straight downward by your side. The BOSU should be placed a couple steps in front of your standing position.\n\nSTEP 2. Step forward onto the BOSU, lowering your body downward so that you have a bend in your one knee, as illustrated.\n\nSTEP 3. Push off of that foot to return to starting position and repeat. To make the exercise more challenging, hold a pair of dumbbells in each hand as you perform the routine.",
    "difficulty": "Beginner",
    "id": 60,
    "image": "bosu_lunge",
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
    "name": "bosu lunge",
    "target1": "legs",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Flip a Bosu ball over so that the rounded portion is facing the floor. Position your hands on the sides of the platform.\n\nSTEP 2. Brace your abdominal and core muscles as you lower yourself so that your chest nearly touches the bal. Tuck your elbows as you lower your body so that your upper arms form a 45-degree angle with your body at the bottom of the movement.\n\nSTEP 3. Pause at the bottom, then push yourself back to the starting position. Do not allow your hips to sag at any point during the movement and repeat.",
    "difficulty": "Beginner",
    "id": 61,
    "image": "bosu_pushup",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu pushup",
    "target1": "abdominals",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Begin by sitting on a BOSU ball in situp position with your feet raised up off the floor and a slight bend in your knees. With your hands, hold a medicine ball at your chest level.\n\nSTEP 2. Once you find your balance, twist your upper body to one side, lowering the medicine ball towards the ground, as illustrated.\n\nSTEP 3. Twist your torso to the other side, keeping your feet up and as stationary as possible throughout the motion.",
    "difficulty": "Intermediate",
    "id": 62,
    "image": "bosu_russian_twist",
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
    "name": "bosu russian twist",
    "target1": "abdominals",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Place a BOSU on the floor, and rest one hand on it while extending your legs straight out - one foot on top of the other.\n\nSTEP 2. Raise your top leg upward. Keep your body and the raised leg straight throughout the movement.\n\nSTEP 3. Return to the starting position and repeat with the other leg.",
    "difficulty": "Beginner",
    "id": 63,
    "image": "bosu_side_bridge",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "bosu side bridge",
    "target1": "abdominals",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Begin by lying on the BOSU ball with your hips just off the edge of the ball. Place your hands behind your head to gently support your neck.\n\nSTEP 2. Exhale and curl your upper body over the BOSU ball. Hold for a brief second at the top, before slowly returning to the starting position.\n\nSTEP 3. Move in a slow and controlled fashion. Try to keep your hips still. Focus on moving your spine only, not your hips.",
    "difficulty": "Intermediate",
    "id": 64,
    "image": "bosu_sit_up",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bosu sit-up",
    "target1": "abdominals",
    "type": "bosu"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your back wit your knees bent and feet flat on the floor. Place your hands by the side of your head and lift your hips off the floor so that you form a straight line from your shoulders to your hips (as illustrated).\n\nSTEP 2. Lift your head and upper shoulders off the flooor while keeping your feet flat on the floor.\n\nSTEP 3. Hold, then return to the starting position.",
    "difficulty": "Intermediate",
    "id": 65,
    "image": "bridge_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "bridge crunch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Using an overhand grip, hold a barbell so that it is resting on your upper back (be careful not to rest it on your neck) and then stand about three feet in front of a bench. Then, lace your left foot on the bench behind you so that only your instep is on it.\n\nSTEP 2. Slowly lower your body so that your right knee becomes bent 90 degrees and your left knee comes close to touching the floor. Your torso should remain upright while your right lower leg is perpendicular to the floor.\n\nSTEP 3. Push yourself back to the original starting position as quickly as you are capable. Repeat until you feel you are done, then switch feet so that your right foot is now resting on the bench while your left leg does the workout.",
    "difficulty": "Advanced",
    "id": 66,
    "image": "bulgarian_split_squat",
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
    "name": "bulgarian split squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Place one foot on the floor, roughly 3 feet in front of a chair, and balance your other foot on a chair behind you, as illustrated. Your hands should be held behind your ears.\n\nSTEP 2. Use your front foot for balance as you bend both knees to lower your body straight down until your back knee is a few inches off the floor and your front leg is bent roughly 90 degrees. The rest of your body should form a straight line. Finish the set, then switch your leg positions and repeat.",
    "difficulty": "Intermediate",
    "id": 67,
    "image": "bulgarian_split_squat_no_weight",
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
    "name": "bulgarian split squat (no weights)",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Attach a straight bar to the low pulley of a cable station. Then, grab the bar with a shoulder-width, underhand grip and hold it at arm's length just in front of your thighs. Try standing straight with your upper arms tucked against your sides and your feet hip-wdith apart. Your knees should be bent slightly.\n\nSTEP 2. Curl the bar toward your chest as far as you can without allowing your upper arms to move.\n\nSTEP 3. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 68,
    "image": "cable_biceps_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "cable biceps curl",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Latissimus Dorsi": {}
      }
    },
    "description": "This movement is a good one for shaping the chest, and because cables are being used there is constant tension on the muscles. However, it is a little too advanced for a beginner and should be regarded as a progression from Machine Chest Flye once basic strength has been built up.\n\nSTEP 1. Lie on the bench, making sure that your back is supported and your feet are placed on the floor or platform. Grasp the handles and extend you arms up, keeping your elbows slightly bent and your palms facing each other.\n\nSTEP 2. Inhale, then lower the handles out to the sides into a semi-circle, keeping them in line with you shoulders. Try to work up the a range of motion that makes you feel a slight stretch in the chest area.\n\nSTEP 3. Exhale and bring the handles back into the midline of your body, with your elbows still slightly bent, and contract the chest for a second time. Repeat for the desired number of repetitions.",
    "difficulty": "Advanced",
    "id": 69,
    "image": "cable_chest_flye",
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
    "name": "cable chest flye",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "This exercise is similar to other bench and chest presses but the unstable nature of cables makes it a little more advanced than them. The comparative lack of stability means that there has to be more emphasis on working not just the major chest muscles but also the muscles that assist them.\n\nSTEP 1. Lie back on the bench with your feet on the ground or any foot platform, grasp a cable handle in each hand, and extend your arms up above your shoulders.\n\nSTEP 2. With your palms facing each other, inhale and slowly lower the handles out and down to the side of your torso. Make sure that your wrists are straight and your elbows are in line with your shoulders.\n\nSTEP 3. Perform a full stretch in the lower position, then exhale and push back up into the start position, keeping your wrists, elbows, and shoulders in line.\n\nSTEP 4. During the lowering phase, rotate your hands so that your palms face down toward your feet when the move has been finished - rotate your hands back as you push back up.",
    "difficulty": "Advanced",
    "id": 70,
    "image": "cable_chest_press",
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
    "name": "cable chest press",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Grab a handle using a close grip with your arms extended straight overhead.\n\nSTEP 2. Pull the handle down to the top of your chest.\n\nSTEP 3. Return the handle back to the starting position by straightening your arms completely Keep your back upright and straight throughout the movement.",
    "difficulty": "Intermediate",
    "id": 71,
    "image": "cable_close_grip_pulldown",
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
    "name": "cable close grip pulldown",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This is a very good exercise for helping to shape the chest, and is also a good way to finish off a chest workout. You can work different areas of your chest by varying the tilt of your upper body.\n\nSTEP 1. Stand with your feet slightly wider than a shoulder-width apart with your back facing the cable machine. Select a light weight, grasp the handles, and then bend at the waist, keeping your arms out to the side of your body with your elbows slightly bent.\n\nSTEP 2. Inhale, keep your abdominals tight, then bring in your arms, making them meet in front of your chest. Make sure that your wrists, elbows, and shoulders are traveling in the same line until your hands meet in the middle.\n\nSTEP 3. Hold for a second and squeeze your chest. Then, keeping the movement under control, ease your arms back to the start - stretch your chest, making sure that your shoulders are relaxed and your back is straight.",
    "difficulty": "Advanced",
    "id": 72,
    "image": "cable_crossover",
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
    "name": "cable crossover",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Grab the handle of a floor pulley with your left hand. Stand with your feet about shoulder-width apart and fairly close to the pulley with your back toward it.\n\nSTEP 2. Bend your left arm slightly and keep it fixed at the elbow throughout the movement.\n\nSTEP 3. Keep your torso still as you raise your left arm forward to shoulder level. Your palm should be facing the floor at the peak.\n\nSTEP 4. Hold this position for a few seconds, then slowly lower your arm back to starting position.",
    "difficulty": "Intermediate",
    "id": 73,
    "image": "cable_front_raise",
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
    "name": "cable front raise",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "description": "This is a slightly more advanced exercise that helps develop balance and stability as well as endowing all the leg muscles, but especially the quadriceps muscles and the gluteals, with considerable strength.\n\nSTEP 1. Stand tall, a small distance away from the machine, with your feet hip-distance apart and your toes pointing forward. Hold the handles so that your palms are facing each other, and flex your arms fully at the elbow.\n\nSTEP 2. Pull in your abdominal muscles, but not so tightly that your breathing is affected. Inhale and slowly lower your body - start the movement at your hips by pushing them out behind you in a sitting motion, then allow your knees to bend, but make sure that they do not travel forward over your toes. Continue lowering your body until you are in a comfortable position but ensure that your knees do not bend inward or bow outward and your feet, knees and hips are in line.\n\nSTEP 3. Exhale and slowly push up through your heels, maintaining good posture all the way up through the movement.",
    "difficulty": "Intermediate",
    "id": 74,
    "image": "cable_front_squat",
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
    "name": "cable front squat",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "description": "This exercise not only helps with balance and stability but also develops the strength of your hamstrings. You can work your gluteal muscles if you use the third variation.\n\nSTEP 1. Stand tall and hold on to the support with both hands, place the foot and ankle of the leg to be exercised into the support strap and raise that leg slightly off the group. Flex your standing leg slightly at the knee. Your legs should be parallel to each other and your abdominal muscles pulled in - but not so tightly that your breathing is affected.\n\nSTEP 2. Exhale and slowly pull your ankle up toward your bottom, keeping your hips and knees in line with each other. Do not allow your ankle to travel backward.\n\nSTEP 3. When your ankle has moved as far as it can, inhale and slowly lower your leg back to the starting position - but do not allow your foot to touch the floor.\n\nSTEP 4. Repeat for desired number of repetitions, then repeat the exercise using your other leg.",
    "difficulty": "Intermediate",
    "id": 75,
    "image": "cable_hamstring_curl",
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
    "name": "cable hamstring curl",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Attach a rope handle to a high cable pulley and grasp the cable rope attachment with both hands. Place your wrists against the side of your head. Flex your hips to allow the resistance on the cable pulley to lift your torso upward so that your spine is hyperextended..\n\nSTEP 2. Curl your head and torso down to one side towards your knees, keeping your hands at the sides of your head.\n\nSTEP 3. Hold, then return to the upright starting position and repeat to the other side.",
    "difficulty": "Beginner",
    "id": 76,
    "image": "cable_kneeling_twisting_crunch",
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
    "name": "cable kneeling twisting crunch",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "This exercise is an excellent one for improving running technique. It requires good balance, but works all of the quadriceps.\n\nSTEP 1. Stand tall with your planted leg slightly flexed at the knee and your hands on the support bar. Pull in your abdominal muscles slowly, exhale and start to raise your knee.\n\nSTEP 2. As your knee nears 90 degrees at the hip, slowly extend your lower leg as far as is comfortable without compromising your body position.\n\nSTEP 3. Inhale, slowly flex your lower leg and return your knee to the starting position - do not allow your foot to touch the ground.\n\nSTEP 4. Repeat for the desired number of repetitions, then repeat the exercise using your other leg.",
    "difficulty": "Intermediate",
    "id": 77,
    "image": "cable_leg_extension",
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
    "name": "cable leg extension",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "description": "This exercise works the deltoids, in the shoulder, especially the rear head of each deltoid. At the end of the movement, when you pinch your scapulae (shoulder blades) together, you can emphasize trapezius and the rhomboids (in the back).\n\nSTEP 1. Kneel down on your hands and knees side-on to the cable machine, making sure that you keep your back straight and your abdominal muscles pulled in. Reach through and grab the handle, then take up the stack on the weight stack.\n\nSTEP 2. Keeping your elbow slightly bent, pull your arm back through until your upper arm is in line with your shoulder. At the same time, extend your lower arm and contract the rear of your shoulder.\n\nSTEP 3. Keeping the movement under control, guide the cable back to the start position, keeping the tension on throughout, and repeat for the desired number of reps.",
    "difficulty": "Advanced",
    "id": 78,
    "image": "cable_rear_lateral_raise",
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
    "name": "cable rear lateral raise",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Sit slightly forward on the platform and grasp the cable attachment. Slide hips back, positioning your knees with a slight bend.\n\nSTEP 2. Pull the handle straight into your chest, bending at the elbows and squeezing your shoulder blades together. Remain upright throughout and do not sway during the movement.",
    "difficulty": "Intermediate",
    "id": 79,
    "image": "cable_seated_close_row",
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
    "name": "cable seated close row",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Trapezius": {}
      }
    },
    "description": "This simple but extremely effective exercise works the back muscles that also help with posture. It is vital both that correct posture is maintained and that the weights used are not too heavy.\n\nSTEP 1. Sit facing the cable machine, either on the seat provided or on a stability ball, and adjust the weight stack as necessary. The cable pulley should be at around the height of your head when you are seated. Take an overhand grip on the cables and begin to pull back, keeping your elbows high and in line with your shoulders and hands. Maintain your \"tall\" posture and keep your abdominal muscles tight.\n\nSTEP 2. Pull back until either your shoulderblades are touching or you have gone as far as your range of movement allows.\n\nSTEP 3. Retract and hold for a second before easing back to the start position, ensuring that your wrist, elbows, and shoulders are traveling in the same line. Repeat for the desired number of reps.",
    "difficulty": "Intermediate",
    "id": 80,
    "image": "cable_seated_high_row",
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
    "name": "cable seated high row",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Pectoralis": {}
      }
    },
    "description": "This is a very good back exercise that also isolates the upper back effectively when you retract the shoulderblades during the movement. The eccentric part of the movement also stretches the back muscles out.\n\nSTEP 1. Place your feet on the platform, keeping a slight bend in your knees and making your posture \"tall\". Grasp the handles and extend your back forward while keeping your shoulders slightly retracted, and then pull your elbows in and back toward the sides of your torso - the handles should come all the way in until it reaches your navel.\n\nSTEP 2. Hold the position for a second before returning back out, keeping the movement under control: your arms returning to the extended position; your back going slightly forward; and with your knees slightly bent.\n\nSTEP 3. Repeat for the desired number of reps.",
    "difficulty": "Beginner",
    "id": 81,
    "image": "cable_seated_low_row",
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
    "name": "cable seated low row",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {},
        "Trapezius": {}
      }
    },
    "description": "This is an excellent exercise that isolates the medial head of the deltoids (at the side of the shoulders) almost completely. The movement is very effective and beginners and those at intermediate or advanced levels can use it as part of a shoulder workout.\n\nSTEP 1. Stand close to the cable machine and side-on to it, position your arm slightly in front of your thighs and take hold of the handle.\n\nSTEP 2. Inhale and, keeping a slight bend in the elbow, raise your arm out to the side of the body until your upper arm is level with your shoulder. Keep your palm facing down.\n\nSTEP 3. Slowly, and with the movement under control, lower your arm back down to the start position.",
    "difficulty": "Advanced",
    "id": 82,
    "image": "cable_side_lateral_raise",
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
    "name": "cable side lateral raise",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Standing upright, grasp the handle with your arms straight out in front. Get into squat position by bending your knees slightly while keeping your back flat - almost like you are about to sit back on a chair.\n\nSTEP 2. Pull the handle straight inward toward your chest.\n\nSTEP 3. Release and extend your arms to return to the starting position. Remain upright throughout the motion and do not sway back and forth.",
    "difficulty": "Intermediate",
    "id": 83,
    "image": "cable_standing_close_row",
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
    "name": "cable standing close row",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Attach a rope handle to a high cable pulley and stand upright with your back to the weight stack. Hold the ends of the rope in each hand by the sides of your head.\n\nSTEP 2. Curl your head and torso down to your midsection while remembering to keep your hands by the side of your head.\n\nSTEP 3. Hold, then return to the upright starting position.",
    "difficulty": "Beginner",
    "id": 84,
    "image": "cable_standing_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "cable standing crunch",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise works the back well and the triceps muscles assist with the movement. The exercise should not be performed using heavy weights as doing so will compromise its effectiveness.\n\nSTEP 1. Stand facing the cable machine, either with your feet slightly wider than a shoulder-width or with one leg forward. Adjust the weight stack to a suitable working weight, then take an overhand grip on the straight bar with your hands about a shoulder-width apart. The starting position of the bar should be slightly higher than shoulder level.\n\nSTEP 2. Keeping your elbows slightly bent, brace your upper body and pull the bar down until it reaches your upper thighs - keep your arms rigid throughout.\n\nSTEP 3. Slowly raise the bar back to shoulder height, keeping the tension on your back muscles constant and maintaining your posture.",
    "difficulty": "Beginner",
    "id": 85,
    "image": "cable_straight_arm_pull_down",
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
    "name": "cable straight arm pull-down",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Standing upright and facing to one side, hold a cable using both hands.\n\nSTEP 2. Twist to the opposite side, turning your head and shoulders in the process, but keep your arms straight.\n\nSTEP 3. Twist back to the starting side, focusing on only moivng your hips and shoulders. Remember to keep your arms straight throughout the movement.",
    "difficulty": "Intermediate",
    "id": 86,
    "image": "cable_torso_rotation",
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
    "name": "cable torso rotation",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise is a very good one for developing both the size and shape of the triceps muscles.\n\nSTEP 1. Position your feet in a split stance - one foot in front of the other with your feet hip-distance apart - facing away from the cable machine. Take an end of the rope in each hand and position it behind your head, with your elbows pointing upward.\n\nSTEP 2. Exhale and slowly extend your arms at the elbow while maintaining your body position - your arms should be parallel with each other and your elbows should point up.\n\nSTEP 3. Keep extending your arms until they are straight, then inhale and slowly lower your arms to return to the starting position.",
    "difficulty": "Intermediate",
    "id": 87,
    "image": "cable_triceps_overhead_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "cable triceps overhead extension",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "This is a slightly more advanced exercise in which you can vary your grip to help with all-round development. It also helps develop good stability when standing.\n\nSTEP 1. Stand tall, facing the cable machine with your feet hip-distance apart, your knees slightly flexed, and your elbows pulled back and tucked into your sides. Hold the handles in an underhand grip with your palms facing up.\n\nSTEP 2. Inhale slowly, then exhale and extend your arms at the elbow until they are straight. Avoid snapping your arms out and maintain your body position throughout.\n\nSTEP 3. Inhale, and flex your arms gently at the elbow to return to the starting position.",
    "difficulty": "Beginner",
    "id": 88,
    "image": "cable_triceps_pushdown",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "cable triceps pushdown",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Take a stirrup handle, and attach it to the pulley. Grab it with both hands firmly, and stand with your left side toward the cable station and your feet shoulder-width apart. Hold onto the handle as if you are about to swing an axe.\n\nSTEP 2. Then, pull the rope down so that it crosses your torso. Bend and twist your waist to ensure that the handle ends up on the far side of your right calf. Pause while at the bottom, and then slowly straighten your body posture, as you return to starting position.\n\nSTEP 3. Finish the number of repetitions you wish to do, then repeat wit your right side toward the weight track.",
    "difficulty": "Intermediate",
    "id": 89,
    "image": "cable_woodchopper",
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
    "name": "cable woodchopper",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "STEP 1. Position yourself on a leg press machine with the toes of both feet on the platform, a little closer than shoulder-width apart.\n\nSTEP 2. Flex your feet so that they're flat on the platform.",
    "difficulty": "Beginner",
    "id": 90,
    "image": "calf_raise",
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
    "name": "calf raise",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Place a chair behind you, and hold onto it as illustrated. Make sure that the chair is sturdy, and that your knees are bent while keeping your feet flat on the floor. Pretend you are sitting in another chair in front of the one you are holding for support.\n\nSTEP 2. Keep your back arched and close to the chair as you slowly lower your body until your upper arms are parallel to the floor. Your torso should remain straight. Pause, then press back up the the starting position.",
    "difficulty": "Beginner",
    "id": 91,
    "image": "chair_dip_no_weight",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "chair dip (no weights)",
    "target1": "arms",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "description": "STEP 1. Start by hanging from the bar with your arms fully extended overhead. Your legs can be bent, straight or crossed behind you.\n\nSTEP 2. Pull yourself up until your chin is over the bar. Hold, the lower yourself to starting position. You can add weight to make it more difficult by wearing a weight belt or by holding a dumbbell between your feet.",
    "difficulty": "Beginner",
    "id": 92,
    "image": "chinup",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 8
      }
    ],
    "name": "chinup",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. With your back flat on the floor, bend your knees and hips at right angles, as illustrated. Your hands should be behind your head with elbows out toward your sides.\n\nSTEP 2. Slowly lift your head and shoulders off the floor, as if doing a crunch, but also ensure that your hips are coming off the floor by crunching your knees up towards your chest.",
    "difficulty": "Beginner",
    "id": 93,
    "image": "clam",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "clam",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Sit on a bench, hold a dumbbell in one arm with your elbow resting on your inner thigh. Keep your forearm straight, as illustrated.\n\nSTEP 2. Raise the dumbbell up toward your shoulder while only bending at the elbow. Keep your wrist straight through the movement.\n\nSTEP 3. Return to starting position. Repeat.",
    "difficulty": "Beginner",
    "id": 94,
    "image": "concentration_dumbbell_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "concentration dumbbell curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Hold a weight plate using both hands at the level of your thighs. Keep your arms straight, and stand fully upright.\n\nSTEP 2. Raise the plate in an arc motion - to the front and over your shoulder - twisting your upper body to that side.\n\nSTEP 3. Return to the starting position and repeat the motion but target the other side of the body.",
    "difficulty": "Beginner",
    "id": 95,
    "image": "corkscrew",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "corkscrew",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your back on the floor and raise your head and upper shoulders off the mat slightly. Lace your fingers from both hands together behind your inclined head for support while keeping your elbows wide apart. Do NOT bend your head toward your chest, keep it perpendicular to your torso but bend your knees 90 degrees, and raise your feet 1-2 inches off of the floor.\n\nSTEP 2. While twisting your torso to the left so that your right elbow moves toward your left knee, contract your stomach muscles. Ensure that you are lifting your left shoulder off the floor. At the height of the movement, pause, then slowly return to your starting position without relaxing your muscles. Alternate between leftward and rightward twists.",
    "difficulty": "Beginner",
    "id": 96,
    "image": "crunch_twist",
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
    "name": "crunch twist",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Place a mat on the floor (it helps) and lie flat on your back with your legs bent and feet flat on the floor - as illustrated. Hold a dumbbell at either end and let it rest on your chest.\n\nSTEP 2. Hold the dumbbell in place as you slowly curl your head and shoulders off the floor and hold the elevated position for the remainder of the exercise.\n\nSTEP 3. Slowly pull your left knee in toward your chest as you extend your right leg straight out about 2 inches off the floor.\n\nSTEP 3. Now reverse this by extending your left leg while simultaneously pulling in your right knee to your chest - as if you are riding a bicycle on your back.\n\nSTEP 4. Keep alternating legs while keeping your head elevated. When done, lower back to the starting position with your head flat against the mat.",
    "difficulty": "Intermediate",
    "id": 97,
    "image": "cycle_crunch",
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
    "name": "cycle crunch",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {},
        "Soleus": {}
      }
    },
    "description": "This is a full-body exercise that works all the major muscles in the body, and especially the ones in the legs and back. It is a very difficult exercise to do, but is an excellent strength-developer when it is performed well.\n\nSTEP 1. Stand with your feet hip-distance apart and bend down in sitting motion until your thighs are parallel to the floor. Keep your back straight and make sure that your spine is as close to the neutral position as possible. Take an overhand grip on the bar with your hands slightly wider than a shoulder-width apart.\n\nSTEP 2. Exhale, draw your abdominal muscles in, and lift the bar by pushing up through your legs.\n\nSTEP 3. As the bar reaches your knees during the lift phase, push your hips forward to raise your torso so that you are standing tall with your arms by your sides and the bar resting on your thighs.\n\nSTEP 4. Hold the position for two seconds, inhale and return the weight to the floor.",
    "difficulty": "Beginner",
    "id": 98,
    "image": "dead_lift",
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
    "name": "dead lift",
    "target1": "back",
    "target2": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise targets primarily the triceps, but includes some lower chest muscles.\n\nSTEP 1. While lying on a declined bench, grab the bar using an overhand grip, but hold them closer together than the normal shoulder-width apart.\n\nSTEP 2. Lift it off the uprights and hold it over your lower chest at arm's length.\n\nSTEP 3. Slowly lower the bar to your chest, while keeping your elbows as close to your sides as possible. Pause, then push the bar up until your arms are straight.",
    "difficulty": "Intermediate",
    "id": 99,
    "image": "decline_close_grip_bench_press",
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
    "name": "decline close-grip bench press",
    "target1": "arms",
    "target2": "chest",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "Avoid rounding your back during this exercise as it not only strains the back, but cheats your chest muscles from doing the work. Keep your back flat on the bench. Choose heavier weights for a decline bench press than a regular bench press since it is generally easier to lift the weight.\n\nSTEP 1. Lie flat on an decline exercise bench - feet secured at the high end of the bench for support. Position the weights along the sides of your chest, elbows aimed at the floor.\n\nSTEP 2. Turn the weights so that your palms face forward.\n\nSTEP 3. Keeping your back flat on the bench, slowly press the weights up until your arms are fully extended above your chest, elbows unlocked.\n\nSTEP 4. Slowly lower the weights back down along the sides of your chest and repeat.",
    "difficulty": "Beginner",
    "id": 100,
    "image": "decline_dumbbell_bench_press",
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
    "name": "decline dumbbell bench press",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Lie on a decline bench angled anywhere between 30-45 degrees down while holding a dumbbell in each hand.\n\nSTEP 2. Extend your arms straight up above your chest, palms facing in toward each other with your elbows slightly bent.\n\nSTEP 3. Keeping your arms fixed in this position, slowly lower your arms out to your sides - in an arc like motion - until the weights are level with your chest.\n\nSTEP 4. Slowly bring your arms back up in the reverse of the previous arc motion, until the weights are once again above your chest.\n\nSTEP 5. Repeat.",
    "difficulty": "Intermediate",
    "id": 101,
    "image": "decline_dumbbell_fly",
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
    "name": "decline dumbbell fly",
    "target1": "chest",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Adjust the bench so that it declines. Then place a dumbbell between the insteps of your feet and lie facedown on the bench. Grab the front or sides of the bench if you require support.\n\nSTEP 2. Curl the weight up toward your buttocks but make sure to stop when your lower legs are pointing straight upwards.\n\nSTEP 3. Lower the weight gradually, without letting it touch the floor.",
    "difficulty": "Intermediate",
    "id": 102,
    "image": "decline_leg_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 16
      }
    ],
    "name": "decline leg curl",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "While a simple variation on the regular pushup, the decline pushup helps to strengthen your shoulders more than the traditional pushup. Because of the angulation, you are actually lifting more bodyweight, so expect the exercise to be more difficult than a traditional pushup.\n\nSTEP 1. Place your feet on a bench or any elevated step and get into a standard pushup position.\n\nSTEP 2. Lower your body until your chest nearly touches the floor, pause, then push yourself back to the starting position. Maintain proper form throughout by preventing your hips from sagging at any point, keep your core stiff by bracing your abdominal muscles and straighten your legs while placing your weight on your toes.",
    "difficulty": "Beginner",
    "id": 103,
    "image": "decline_pushup",
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
    "name": "decline pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie back on a decline bench and hold a medicine ball with both hands at chest level.\n\nSTEP 2. Raise your head and shoulders off the bench while twisting to one side, simultaneously. Use slow, controlled motions and focus on utilizing your abdominal muscles - not your lower back.",
    "difficulty": "Intermediate",
    "id": 104,
    "image": "decline_twisting_ab_crunch",
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
    "name": "decline twisting ab crunch",
    "target1": "abdominals",
    "type": "other"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Place yourself in the standard pushup position but have your hands placed directly under your chest with your index fingers and thumbs spread and touching so they form a \"diamond\".\n\nSTEP 2. Keep your back flat as you lower your body until your chest is nearly touching your hands.\n\nSTEP 3. Pause, then push yourself back up the starting position.",
    "difficulty": "Beginner",
    "id": 105,
    "image": "diamond_pushup",
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
    "name": "diamond pushup",
    "target1": "arms",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Grab hold of the parallel bars on a dip station and lift yourself until your arms are fully extended, as illustrated. Keep your knees bent and lock your ankles together.\n\nSTEP 2. Gradually lower your body by bending your elbows until you find your upper arms are parallel to the bars.\n\nSTEP 3. Pause, then push yourself back to the starting position.",
    "difficulty": "Beginner",
    "id": 106,
    "image": "dip",
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
    "name": "dip",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Position yourself in pushup position but ensure that your hands are placed farther in front and wider than your shoulders. Raise your hips as you move your feet forward as far as possible. Keep your back and legs straight straight throughout the movement.\n\nSTEP 2. Move your chest downward and forward until nearly touching the floor. Your shoulders should be inline with your hands.\n\nSTEP 3. Pause, then push our hips downward and straighten your arms. Pause again, then reverse the movement until you've come back to the starting position.",
    "difficulty": "Intermediate",
    "id": 107,
    "image": "dive_bomber_pushup",
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
    "name": "dive-bomber pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {},
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Starting from the same initial position for standard bicep curl, hold the bar with both arms extended downward, gripping the bar with your palms facing up.\n\nSTEP 2. Lift the bar, but instead of keeping both elbows locked to your side and lifting in an arc, allow both elbows to move backward in order to \"drag\" the bar in a straight line directly up the front of your body.\n\nSTEP 3. Once the bar reaches your lower-chest area, reverse the motion to complete the rep.",
    "difficulty": "Intermediate",
    "id": 108,
    "image": "drag_curl",
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
    "name": "drag curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "Avoid rounding your back during this exercise as it not only strains the back, but cheats your chest muscles from doing the work. Keep your back flat on the bench.\n\nSTEP 1. Lie flat on an exercise bench - knees bent and feet flat on the floor - holding a dumbbell in each hand. Position the weights along the sides of your chest, elbows aimed at the floor.\n\nSTEP 2. Turn the weights so that your palms face forward.\n\nSTEP 3. Keeping your back flat on the bench, slowly press the weights up until your arms are fully extended above your chest, elbows unlocked.\n\nSTEP 4. Slowly lower the weights back down along the sides of your chest and repeat.",
    "difficulty": "Beginner",
    "id": 109,
    "image": "dumbbell_bench_press",
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
    "name": "dumbbell bench press",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie down on an exercise bench so that your torso is hanging off the end of the bench and you can bend at the waist. Hold onto a fairly light dumbbell at both ends and place it near your chest - with elbows extended to the sides.\n\nSTEP 2. Bending at the waist, raise your torso up until your body is perfectly straight and parallel to the floor.\n\nSTEP 3. Slowly turn your torso to your left, then lower yourself back down. Repeat the move but turn to the opposite side (right).",
    "difficulty": "Intermediate",
    "id": 110,
    "image": "dumbbell_bench_twist",
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
    "name": "dumbbell bench twist",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Latissimus Dorsi": {}
      }
    },
    "description": "STEP 1. Grab a dumbbell with your weaker hand and hold it at arm's length in front of your legs, palm facing in. Place your nonworking arm behind your back.\n\nSTEP 2. Tighten your core and push your hips back until your torso is at a 45-degree angle to the floor. Bend your knees slightly, but make sure your neck and head align with your back.\n\nSTEP 3. Pull the dumbbell up to the side of your abdomen, then lower it back to arm's length.",
    "difficulty": "Intermediate",
    "id": 111,
    "image": "dumbbell_one_arm_bent_over_row",
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
    "name": "dumbbell bent-over row",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "description": "This is a useful exercise for beginners because it helps correct any imbalance between the strength of the two biceps and allows for variations of hand grip that help develop biceps further.\n\nSTEP 1. Stand tall, maintaining good posture, with your feet hip-distance apart, and your knees slightly flexed, leaving your arms by your sides with your palms facing forward.\n\nSTEP 2. Inhale, then raise the dumbbells slowly toward your shoulders as you exhale, keeping your elbows close to your sides. Make sure that you do not allow your elbows to travel forward.\n\nSTEP 3. When you have raised the dumbbells to your shoulders inhale and slowly lower them back to the starting position.",
    "difficulty": "Beginner",
    "id": 112,
    "image": "dumbbell_biceps_curl",
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
    "name": "dumbbell biceps curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Stand with your feet hip-width apart. Grab a pair of dumbbells and hold them at your sides at arm's length.\n\nSTEP 2. Dip our knees so they're bent about 45 degrees and jump as high as you can. Point your toes toward the floor when you jump.\n\nSTEP 3. Allow your knees to bend 45 degrees when you land, then immediately jump again.",
    "difficulty": "Beginner",
    "id": 113,
    "image": "dumbbell_calf_jump",
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
    "name": "dumbbell calf jump",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "lower back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {},
        "glutes": {}
      }
    },
    "description": "This particular compound exercise works a wide range of muscles including your legs, glutes, abs and back. Its complexity though means that it is not intended for beginners. STEP 1. Stand straight with your feet hip-width apart and with a pair of heavy dumbbells on the floor in front of your toes. Bend your knees and grab the dumbbells with an overhand grip - palms facing your feet.\n\nSTEP 2. With your head up and back straight, slowly stand up until your legs are straight, keeping the weights close to your legs as you go.\n\nSTEP 3. Pause, then reverse the motion and return the weights slowly to the floor.",
    "difficulty": "Advanced",
    "id": 114,
    "image": "dumbbell_deadlift",
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
    "name": "dumbbell deadlift",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "This exercise isolates the chest and can also help with flexibility. However, it should not be used with heavy weights or undertaken by beginners, because of the stress that it places on the shoulder girdle.\n\nSTEP 1. Grasp a light-to-moderate pair of dumbbells, then lie back with your arms extended up over your upper chest. Your elbows should be slightly bent and your arms facing each other.\n\nSTEP 2. Inhale, then slowly lower your arms out to the sides of your torso in a semi-circle - keep the movement under control with your elbows still slightly bent - until there is a full, comfortable stretch in the area of your chest and shoulders around the level of shoulder-height.\n\nSTEP 3. Hold the stretch for a second before bringing the dumbbells back in to meet at the top of the movement - exhale as you return to the starting position.",
    "difficulty": "Beginner",
    "id": 115,
    "image": "dumbbell_flye",
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
    "name": "dumbbell flye",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Stand straight with your feet hip-width apart and a light dumbbell in each hand.\n\nSTEP 2. Your arms should be hanging down in front of your thighs - turn your wrists so that your palms face back behind you.\n\nSTEP 3. Keeping your arms perfectly straight, slowly raise the weights out and up in front of your until your arms are parallel to the floor.\n\nSTEP 4. Hold for a second, then slowly lower the weights back down.",
    "difficulty": "Beginner",
    "id": 116,
    "image": "dumbbell_front_raise",
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
    "name": "dumbbell front raise",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells so that your palms are facing each other and rest the ends on the thickest part of your shoulders. Ensure that your upper arms are parallel to the floor.\n\nSTEP 2. Gradually lower your body as if you were sitting back into a chair, keeping your back in its natural alignment and your lower legs nearly perpendicular to the floor.\n\nSTEP 3. When your upper thighs are parallel to the floor, pause, and then return to the starting position.",
    "difficulty": "Beginner",
    "id": 117,
    "image": "dumbbell_front_squat",
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
    "name": "dumbbell front squat",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Set the bench to a 45-degree incline. Grab two dumbbells and lie faceup on the bench with your arms extended over your chest and your palms facing forward. Your hands should be about shoulder-width apart at the top.\n\nSTEP 2. As you lower the weights, your elbows will flare out to your sides. Your hands should stay over your elbows through the movement. Lower the weights as far as your shoulder mobility allows.\n\nSTEP 3. Return to your starting position.",
    "difficulty": "Intermediate",
    "id": 118,
    "image": "dumbbell_incline_bench_press",
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
    "name": "dumbbell incline bench press",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {},
        "Trapezius": {}
      }
    },
    "description": "This exercise is almost identical to one given as a variant to the Cable Side Lateral, but in this case, the exercise can be changed slightly to incorporate either more or less work for the upper back by using varying ranges of motion.\n\nSTEP 1. Stand with your feet a shoulder-width apart, keeping your back straight and arms slightly in front of your torso. With your elbows slightly bent, take a dumbbell in each hand.\n\nSTEP 2. Raise the dumbbells out and up to the level of your shoulders. Keep your palms facing the ground.\n\nSTEP 3. Keeping your elbows bent, lower slowly back to the start position and repeat for the desired number of reps.",
    "difficulty": "Beginner",
    "id": 119,
    "image": "dumbbell_lateral_raise",
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
    "name": "dumbbell lateral raise",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Place a mat on the floor, and lie flat on your back with your legs extended straight. Place a dumbbell between your feet (as illustrated) and tuck your hands in underneath your sides to help provide stability.\n\nSTEP 2. Keep your legs together as you slowly raise both legs up until your heels are 15 inches or so off the ground.\n\nSTEP 3. Pause, then slowly lower your legs back down but stop before the weight touches the floor. Focus on using your abdominal muscles to complete the movement. Repeat.",
    "difficulty": "Beginner",
    "id": 120,
    "image": "dumbbell_leg_lift",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "dumbbell leg lift",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "It is not easy to achieve balance and stability during this exercise, but it is nevertheless an extremely good one for developing strength in the legs overall, and especially in the quadriceps and gluteals.\n\nSTEP 1. Stand tall with your feet hip-distance apart and grasp a dumbbell in each hand with your palms facing inward; make sure that your toes face forward.\n\nSTEP 2. Slowly inhale and step one leg forward, keeping your knee above your ankle and dropping the knee of your rear leg toward the floor. Stop the movement when the rear knee is 2 to 3 inches (5 to 7.5 centimeters) from the floor.\n\nSTEP 3. Exhale and push yourself back to the starting position off your front leg.\n\nSTEP 4. Repeat for the desired number of repetitions, then repeat the exercise stepping your other leg forward.",
    "difficulty": "Intermediate",
    "id": 121,
    "image": "dumbbell_barbell_lunge",
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
    "name": "dumbbell lunge",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise develops the entire chest and also works the triceps muscles and back muscles. It is a good linking exercise between a chest workout and a back workout.\n\nSTEP 1. Lie on a flat bench with your head supported and your feet either in contract with the floor or a raised platform. Hold a dumbbell with both hands, encircling it with your palms against the underside of the top set of plates. Raise the dumbbell up in front of your chest, with your elbows slightly bent.\n\nSTEP 2. Inhale and lower the dumbbell back past your head and back to the limit of your range of motion, keeping your elbows slightly bent at all times. Hold the stretch for a second before exhaling and returning the dumbbell back up to the starting position.\n\nSTEP 3. Repeat for the number of repetitions desired, maintaining correct posture.",
    "difficulty": "Beginner",
    "id": 122,
    "image": "dumbbell_pull_over",
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
    "name": "dumbbell pull-over",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "If a regular pushup hurts your wrists, using a pair of dumbbells helps to lower the stress placed on them. STEP 1. With two dumbbells placed shoulder-width apart on the floor in front of you, kneel down and hold onto them. Keep your arms straight, legs extended, feet fairly together and lock your elbows.\n\nSTEP 2. Lower your body to the floor by placing a bend in your elbows and keeping your back straight.\n\nSTEP 3. Push yourself back up until your arms are straight and elbows unlocked. Repeat.",
    "difficulty": "Beginner",
    "id": 123,
    "image": "dumbbell_pushup",
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
    "name": "dumbbell pushup",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells - one in each hand with your feet about shoulder width apart. Hang both arms down in front of your body, fully extended with your palms facing toward your body.\n\nSTEP 2. Raise the dumbbells up to the height of your shoulder while keeping your elbows fixed in position by your sides.\n\nSTEP 3. Return to starting position by lowering the dumbbells back to the original straight arm position.",
    "difficulty": "Intermediate",
    "id": 124,
    "image": "dumbbell_reverse_curl",
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
    "name": "dumbbell reverse curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells at arm's length at your sides as you stand with your feet shoulder-width apart, toes pointing forward.\n\nSTEP 2. Step back as far as possible with your dominant leg and drop down until that knee grazes the floor, keeping your torso as upright as possible.\n\nSTEP 3. Push through your forward heel to return to the starting position, then immediately lunge back with that leg. That's one repetition.",
    "difficulty": "Beginner",
    "id": 125,
    "image": "dumbbell_lunge",
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
    "name": "dumbbell reverse lunge",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Stand straight and hold a pair of dumbbells in front of your thighs, palms turned toward your body. Your feet should be positioned so that they are shoulder-width apart with toes pointing forward. Take a deep breath, hold it, and push your hips back, allowing your torso to bend forward.  Let your knees bend slightly.\n\nSTEP 2. Lower the weights until they are slightly past your knees. At that point, push your hips forward to return to the starting position. Exhale. Remember to keep your back flat throughout the movement.",
    "difficulty": "Intermediate",
    "id": 126,
    "image": "dumbbell_romanian_deadlift",
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
    "name": "dumbbell romanian deadlift",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "lower back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Trapezius": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand with your feet shoulder-width apart and with your knees slightly bent. Hold a light dumbbell in each hand and bend forward at the waist until your torso is almost parallel to the floor. Hang your arms straight down with your palms facing in, as illustrated.\n\nSTEP 2. Row the weights straight up until they reach the sides of your chest and your arms are bent at right angles. Ideally, your upper arms should be parallel to the floor.\n\nSTEP 3. Immediately perform a kickback manoeuvre by extending your arms straight behind you.\n\nSTEP 4. Squeeze your triceps, then bend your elbows to lower the weights back down so that they are along your sides once again.\n\nSTEP 5. Finally, lower the weights back down until your arms are hanging straight down below your shoulders.",
    "difficulty": "Intermediate",
    "id": 127,
    "image": "row_kickback",
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
    "name": "dumbbell row kickback",
    "target1": "back",
    "target2": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Stand holding a pair of dumbbells just out-side your shoulders, with your arms bent and palms facing each other.\n\nSTEP 2. Push the weights straight overhead, pause, then slowly lower them.",
    "difficulty": "Beginner",
    "id": 128,
    "image": "dumbbell_shoulder_press",
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
    "name": "dumbbell shoulder press",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While standing upright, hold a dumbbell with one arm. Place your other hand on your waist for support.\n\nSTEP 2. Bend gradually toward the side holding the dumbbell - bending only at your side.\n\nSTEP 3. Return to starting upright position. Switch the weight to the other arm and repeat with the other side.",
    "difficulty": "Beginner",
    "id": 129,
    "image": "side_bend",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "dumbbell side bend",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Stand holding dumbbells in front of your thighs, palms turned toward your body. Your feet should be shoulder-width apart, toes pointed forward.\n\nSTEP 2. Lift your right foot up behind you, a few inches off the floor, with your right thigh perpendicular to the floor. Push your hips back and allow your torso to bend forward, while keeping your abs tight and back flat. Your left knee should bent sightly.\n\nSTEP 3.  Bend forward as far as you can while keeping your lower back flat. Return to the starting psotion. Repeat with the other leg.",
    "difficulty": "Intermediate",
    "id": 130,
    "image": "dumbbell_single_leg_deadlift",
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
    "name": "dumbbell single-leg deadlift",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Begin by squatting lower over a dumbbell. Maintain a locked and rigid lower back and have your feet placed a shoulder width apart.\n\nSTEP 2. Grasp the dumbbell and tigthen the abdominal muscles. In a rapid and continuous motion, lift the dumbbell upward until your arm is straight and locked, as illustrated. The dumbbell should travel close to the body and not swing out or away.\n\nSTEP 3. Briefly hold it above your head, then bring it down to the starting position.",
    "difficulty": "Advanced",
    "id": 131,
    "image": "dumbbell_snatch",
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
    "name": "dumbbell snatch",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. While on your back, hold a single light dumbbell in both hands. Raise your legs until they are perpendicular to the floor. Extend your arms upward, ensuring that the dumbbell is roughly held over your chest.\n\nSTEP 2. Keep your legs stable without placing a bend as you lift your chest and shoulders off the floor to try to touch your feet with the dumbbell.\n\nSTEP 3. Return to starting position and repeat.",
    "difficulty": "Beginner",
    "id": 132,
    "image": "dumbbell_toe_touch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "dumbbell toe touch",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. With both hands, hold a single dumbbell close to your chest with your elbows bent, as illustrated. Your feet should be shoulder-width apart.\n\nSTEP 2. Twist your waist to one side, allowing yourself to turn your head and shoulders while keeping your feet motionless.\n\nSTEP 3. Twist your waist to the other side gradually, trying to avoid using momentum for the motion and focusing more on using the power of your abdominal oblique muscles.\n\nSTEP 4. Return to starting position.",
    "difficulty": "Beginner",
    "id": 133,
    "image": "dumbbell_torso_twist",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "dumbbell torso twist",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "description": "STEP 1. With an overhand grip, grab a pair of dumbbells and stand so that your feet are shoulder-width apart with your knees slightly bent. The dumbbells should hang at full arm's length by the side of your thighs and with your thumbs pointed toward one another.\n\nSTEP 2. Lift your upper arms straight out to the sides by bending your elbows. Once the motion is complete, your upper arms should be parallel to the floor, with dumbbells just below chest level.\n\nSTEP 3. Pause, then return to the starting position.",
    "difficulty": "Intermediate",
    "id": 134,
    "image": "dumbbell_upright_row",
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
    "name": "dumbbell upright row",
    "target1": "arms",
    "target2": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Wrist Extensors": {}
      }
    },
    "description": "STEP 1. Stand with a light dumbbell in each hand with your arms at your sides, palms facing behind you. Bend your arms to curl the weights up until your forearms are parallel to the floor. This is the starting position.\n\nSTEP 2. Rotate your wrists until your palms face the ceiling, then rotate them back so your palms face the floor once again. That's one repetition.",
    "difficulty": "Beginner",
    "id": 135,
    "image": "wrist_twist",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "name": "dumbbell wrist twist",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Hold onto a can, or any similarly light object, with each hand. Hold your arms out to your sides with your elbows bent 90 degrees so your upper arms are just an inch or two below your shoulders and almost parallel to the floor. Your forearms are pointed in toward your body at this point.\n\nSTEP 2. Keep your upper arms still and fixated as you use your elbows to rotate your forearms up until they are as close to perpendicular to the floor as possible. Then, return to the starting position.",
    "difficulty": "Beginner",
    "id": 136,
    "image": "external_rotation_no_weight",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "external rotation (no weights)",
    "target1": "arms",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back with your feet flat on the floor and your knees bent at a 90-degree angle, with a light medicine ball squeezed tightly between them.\n\nSTEP 2. Place your hands behind your ears and slowly raise your head, shoulders, and feet off the floor. Now move your knees in a wide figure-8 motion.",
    "difficulty": "Intermediate",
    "id": 137,
    "image": "figure_8_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "figure-8 crunch",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Sit at the end of a bench and grab the barbell with a full, overhand grip slightly shy of being shoulder width. Hold the bar over your head with your arms straight but your elbows unlocked.\n\nSTEP 2. Bend your elbows slowly and lower the bar toward the back of your neck.\n\nSTEP 3. Pause, then press back up the starting position while making sure that your upper arms are in the same position throughout the workout movement.",
    "difficulty": "Advanced",
    "id": 138,
    "image": "french_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "french press",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Stand upright, grab a single weight plate with one hand on each side of the plate - similar to a car steering wheel.\n\nSTEP 2. Raise the plate in front of you until you can see down the center.\n\nSTEP 3. Pause for a few seconds, then lower it in a controlled and slow motion.\n\nSTEP 4. Repeat.",
    "difficulty": "Beginner",
    "id": 139,
    "image": "front_plate_raise",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "front plate raise",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Similar to the back squat, but with a few alterations (a lighter weight is recommended). Grab the barbell in a overhand, shoulder-width grip and bring your elbows forward so that your palms are facing upward, as illustrated. Rest the bar on your front deltoid muscles.\n\nSTEP 2. Start a slow drop with your hips, and not your knees. Lower yourself, in a sense, as if sitting in a chair behind you. Keep your elbows high as you lower yourself until your upper thighs are parallel to the floor.\n\nSTEP 3. Pause at this point, then push yourself back up the starting position. Use a light weight to originally go through this exercise as it has a learning curve that requires getting adjusted towards.",
    "difficulty": "Advanced",
    "id": 140,
    "image": "front_squat",
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
    "name": "front squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. While standing, hold the top end of a dumbbell with both hands near your chest.\n\nSTEP 2. Brace your abs, and lower your body as far as you can by pushing your hips back and bending your knees. Do not be afraid to lower your body as low as possible. Your elbows should brush the insides of your knees as you lower.\n\nSTEP 3. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 141,
    "image": "goblet_squat",
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
    "name": "goblet squat",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Using both hands, hold a dumbbell by the top end. Make sure that your arms are hanging straight down in front of you as you stand.\n\nSTEP 2. Slowly squat down until your thighs are nearly parallel to the floor.\n\nSTEP 3. Move back into standing position while simultaneously twisting your torso to the right. As you go, swing the weight up in a controlled motion and to the right side so that it ends up over your right shoulder. At the peak point, your left heel should be rising off the floor due to the extension.\n\nSTEP 4. Carefully lower the weight back down in front of you, then squat down and repeat the exercise - this time standing up and twisting to the left.",
    "difficulty": "Advanced",
    "id": 142,
    "image": "golf_squat",
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
    "name": "golf squat",
    "target1": "legs",
    "target2": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Hold a barbell with an overhand grip so that it rests on your upper back and not on your neck. Set your feet a shoulder-width apart and knees slightly bent while keeping your back straight. Focus your eyes forward.\n\nSTEP 2. Gradually bend forward using your hips to lower your chest while maintaining the natural arch in your lower back. Keep your head up and maintain about the same angle of your knees.\n\nSTEP 3. Lift your upper body back into starting position.",
    "difficulty": "Beginner",
    "id": 143,
    "image": "good_morning",
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
    "name": "good morning",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Set the barbell on a squat rack so it is at mid-thigh level height. Stand with your back to the barbell, squat down, and use an underhand grip to hold the barbell shoulder-width apart.\n\nSTEP 2. Stand up wit the barbell held behind you.\n\nSTEP 3. Pause while standing, suck and hold in your breath, then push your hips back and squat down until the barbell touches your calves. Keep your core tight and your torso as straight as vertical as possible. Return to the starting position and breath out.",
    "difficulty": "Advanced",
    "id": 144,
    "image": "hack_squat",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "name": "hack squat",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Sit on the edge of the workout bench and hold a pair of dumbbells using a neutral grip (as shown on the diagram) and let them just hang at arm's length.\n\nSTEP 2. Without changing your wrist positioning, slowly curl the weights up toward your shoulders. Remember to keep your upper arms tucked against your sides as you go through the motion.",
    "difficulty": "Beginner",
    "id": 145,
    "image": "hammer_curl",
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
    "name": "hammer curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Hold onto the parallel bars of a dip station using a neutral grip and lift yourself upward so that your arms are straight.\n\nSTEP 2. Use your lower abdominal muscles to pull your hips up and curl them in toward your chest so that your knees are as close to your chest as possible.\n\nSTEP 3. Pause, feel the lower abdominal contraction, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 146,
    "image": "hanging_knee_raise",
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
    "name": "hanging knee raise",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While holding onto a chinup bar using an overhand grip, hang with your knees bent slightly.\n\nSTEP 2. Pull your hips up as you curl inward toward your chest using the muscles of your lower abs. Life your knees as close to your chest as possible, rounding your lower back at the top. Then, pause, feel the contraction in your lower-abdominal muscles, and return to the position you began with.",
    "difficulty": "Advanced",
    "id": 147,
    "image": "hanging_leg_raise",
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
    "name": "hanging leg raise",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Stand over the barbell with the balls of the feet positioned under the bar slightly wider apart than hip width. Squat down and grip the bar with an over hand grip slightly wider than shoulder width. Position the shoulders over the bar with the back arched tightly. Arms are straight with elbows pointed along the bar.\n\nSTEP 2. Pull the bar up off the floor by extending the hips and knees. As the bar reaches the knees vigorously raise the shoulders while keeping the barbell close to the thighs, jump upward extending the body. Flex elbows out to the sides, pulling bar up to neck height.\n\nSTEP 3. Bend knees slightly and lower barbell to mid-thigh position. Slowly lower bar with taut lower back and trunk close to vertical. The advanced athlete may unload (drop) the bar from the completed position. This technique may be practiced to reduce the stress or fatigue involved in lowering the bar as prescribed. Use rubber weightlifting plates on a weightlifting platform if this unloading method is used (unless floor demolition is desired).",
    "difficulty": "Advanced",
    "id": 148,
    "image": "high_pull",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "high pull",
    "target1": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Attach a rope handle to the high cable and grab the rope with a hand-over-hand grip. Stand sideways, about 3 feet from the weight stack, and hold the rope over your shoulder, like an ax you are going to swing.\n\nSTEP 2. Bend and twist at the waist, bringing your hands down and across your torso so they end up on the far side of your outside calf. Let your feet pivot slightly with the movement, to protect your knees.\n\nSTEP 3. Pause at the bottom, then slowly straighten back to the starting position. Finish the reps on that side, then repeat with your opposite side toward the weight stack.",
    "difficulty": "Intermediate",
    "id": 149,
    "image": "high_woodchopper",
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
    "name": "high woodchopper",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie on your back on a bench set at a low incline (30-45 degrees). Hold the barbell at roughly shoulder-width length.\n\nSTEP 2. Lift the bar so that it is over your eyes.\n\nSTEP 3. Slowly lower the weight to your chest, pause, then push it back up over your eyes.",
    "difficulty": "Intermediate",
    "id": 150,
    "image": "incline_barbell_bench_press",
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
    "name": "incline barbell bench press",
    "target1": "chest",
    "target2": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "description": "STEP 1. Sit on an incline bench, and grab a pair of dumbbells. Position the bench so it has roughly a 45-degree bend.\n\nSTEP 2. Curl the dumbbells toward your chest as far as possible without moving your upper arms forward.\n\nSTEP 3. Return to the start position in a controlled manner.",
    "difficulty": "Beginner",
    "id": 151,
    "image": "incline_dumbbell_curl",
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
    "name": "incline dumbbell curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Lie on an incline bench while holding a dumbbell in each hand.\n\nSTEP 2. Extend your arms straight up above your chest, palms facing in toward each other with your elbows slightly bent.\n\nSTEP 3. Keeping your arms fixed in this position, slowly lower your arms out to your sides - in an arc like motion - until the weights are level with your chest.\n\nSTEP 4. Slowly bring your arms back up in the reverse of the previous arc motion, until the weights are once again above your chest.\n\nSTEP 5. Repeat.",
    "difficulty": "Intermediate",
    "id": 152,
    "image": "incline_dumbbell_fly",
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
    "name": "incline dumbbell fly",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie on your back on a 45-degree incline bench. Hold a pair of dumbbells at arm's length by your sides, palms facing in.\n\nSTEP 2. Keep your elbows at your sides as you curl the dumbbells, tunring your palms up as you do. Do not pull your arms forward (toward your troso) as you lift - keep them behind you.\n\nSTEP 3. Return to starting position. Repeat.",
    "difficulty": "Beginner",
    "id": 153,
    "image": "incline_hammer_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "incline hammer curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "This exercise can be done off of anything elevated - a bench as shown, or even on a staircase. The higher the surface, the easier the exercise will be, so work your way down the staircase as your strength increases. The elevation reduces the amount of your body weight you have to lift.\nSTEP 1. Place your hands on a bench and get into a standard pushup position.\n\nSTEP 2. Lower your body until your chest nearly touches the bench, pause, then push yourself back to the starting position. Maintain proper form throughout by preventing your hips from sagging at any point, keep your core stiff by bracing your abdominal muscles and straighten your legs while placing your weight on your toes. Repeat.",
    "difficulty": "Beginner",
    "id": 154,
    "image": "incline_pushup",
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
    "name": "incline pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lying on a slant board, with your hips lower than your head, keep your knees slightly bent.\n\nSTEP 2. Slowly pull your hips upward and inward, like you would if emptying a bucket of water resting on your pelvis. Keep your knees at the same angle throughout the movement.\n\nSTEP 3. Pause, then slowly lower your hips to the starting position.",
    "difficulty": "Advanced",
    "id": 155,
    "image": "inclined_reverse_crunch",
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
    "name": "incline reverse crunch",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Sit on an incline bench with a dumbbell in each hand, arms hanging straight down. Your arms will naturally fall slightly behind your body.\n\nSTEP 2. Turn your hands in so that the backs of your hands face forward, instead of your palms. This is what makes it a reverse curl.\n\nSTEP 3. Keep your upper arms fixed in position as you slowly curl the weights up until the backs of your hands reach your shoulders - your palms should now be facing forward.\n\nSTEP 4. Flex your biceps, then slowly lower your arms back down.",
    "difficulty": "Intermediate",
    "id": 156,
    "image": "incline_reverse_curl",
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
    "name": "incline reverse curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Lie backward on a 45-degree incline bench while holding light dumbbells in each hand. Your chest and stomach should rest flat against the backrest.\n\nSTEP 2. Raise your elbows out to your sides until your upper arms are parallel to the floor with the weights pointing down - your arms should be bent at 90-degree angles at this point.\n\nSTEP 3. Without moving your upper arms, rotate your arms and raise the weights forward until your forearms are parallel to the floor - your arms should still be bent at right angles. Then, reverse the motion by rotating the weights back down.",
    "difficulty": "Beginner",
    "id": 157,
    "image": "incline_shoulder_rotation",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "incline shoulder rotation",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Lie on a low incline bench with your chest against the pad. Let your arms hang straight down from your shoulders, as illustrated. Turn your arms so that your palms are facing each other.\n\nSTEP 2. Raise your arms at a 30-degree angle to your body until they are in line with your body. You should be forming the letter \"Y\".\n\nSTEP 3. Pause, then slowly lower back to the starting position.",
    "difficulty": "Intermediate",
    "id": 158,
    "image": "incline_y_raise",
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
    "name": "incline y raise",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Get into a pushup position with tops of your feet and your shins on the ball and your hands on the floor.\n\nSTEP 2. Pull your knees close to your chest, letting the ball roll slightly forward. Keep your arms straight, and squeeze your abs hard at the top.",
    "difficulty": "Advanced",
    "id": 159,
    "image": "jackknife",
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
    "name": "jackknife",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "lower back": {}
      }
    },
    "description": "STEP 1. Squat down and hold a kettlebell in each hand so that that it falls between your feet with your arms extended straight.\n\nSTEP 2. Thrust your hips forward pulling the kettlebells straight upward, catching them at shoulder height. Your elbows should be bent at the end, and the kettlebells should be held close throughout the movement. Your hips and knees should slightly dip as you absorb the weight of the rising kettlebells.",
    "difficulty": "Advanced",
    "id": 160,
    "image": "kettlebell_clean",
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
    "name": "kettlebell clean",
    "target1": "legs",
    "target2": "back",
    "target3": "shoulders",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your back with your knees bent and feet flat on the floor. Hold a kettlebell in both hands at the level of your upper chest.\n\nSTEP 2. Lift your head and shoulders off the floor, keeping your knees bent and feet flat on the floor.\n\nSTEP 3. Lower your head and shoulders. Repeat.",
    "difficulty": "Beginner",
    "id": 161,
    "image": "kettlebell_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "kettlebell crunch",
    "target1": "abdominals",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand upright with your feet shoulder-width apart. Hold the kettlebells by your sides with your arms straight and your palms facing in.\n\nSTEP 2. Raise your head and shoulders off the bench while twisting to one side, simultaneously. Use slow, controlled motions and focus on utilizing your abdominal muscles - not your lower back.",
    "difficulty": "Beginner",
    "id": 162,
    "image": "kettlebell_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "kettlebell curl",
    "target1": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie on the floor and hold a kettlebell in both hands with your arms straight up over your chest.\n\nSTEP 2. Bend your elbows to lower the kettlebell down to the top of your head.\n\nSTEP 3. Straighten your arms, raising the kettlebell back to its starting position - over your chest. Repeat.",
    "difficulty": "Beginner",
    "id": 163,
    "image": "kettlebell_french_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell french press",
    "target1": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {},
        "lower back": {}
      }
    },
    "description": "STEP 1. Squat holding a kettlebell in both hands between your feet with your arms straight.\n\nSTEP 2. Extend your hips while raising the kettlebell up to just below your chin, keeping your elbows above your hands. Throughout the movement, keep the kettlebell close to your body.\n\nSTEP 3. Pause, then return to starting position. Repeat.",
    "difficulty": "Advanced",
    "id": 164,
    "image": "kettlebell_high_pull",
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
    "name": "kettllebell high pull",
    "target1": "legs",
    "target2": "back",
    "target3": "abdominals",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Bend forward at your waist with your knees bent slightly and your back flat. Hold a kettlebell in one hand with your eblow bend at a right angle. You can kneel over a bench with your other arm supporting your body if you wish.\n\nSTEP 2. Straighten your arm backward and upward while keeping your shoulder steady and your back flat.\n\nSTEP 3. Return the kettlebells to their original level and repeat.",
    "difficulty": "Beginner",
    "id": 165,
    "image": "kettlebell_kickback",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell kickback",
    "target1": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand upright with your back straight and feet shoulder-width apart. Hold a kettlebell in each hand at the shoulders, palm forward, with the weight falling behind the wrist.\n\nSTEP 2. Raise the weights above your head in a controlled motion, ensuring that you do not slam your arms upward and stress the elbow joint.\n\nSTEP 3. Return the kettlebells to their original level and repeat.",
    "difficulty": "Beginner",
    "id": 166,
    "image": "kettlebell_overhead_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell overhead press",
    "target1": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie flat on the floor with your knees bent and feet flat on the floor. Hold a single kettlebell in both hands, with your arms extended up over your chest.\n\nSTEP 2. Gradually lower the kettlebell backward behind your head while continuing to keep your arms extended straight. Avoid placing a bend in your arms.\n\nSTEP 3. Raise the kettlebell once more back to the starting position.",
    "difficulty": "Intermediate",
    "id": 167,
    "image": "kettlebell_pullover",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "kettlebell pullover",
    "target1": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Get into standard pushup position with your hands on two kettlebells, your elbows bent, and your chest nearly touching the floor.\n\nSTEP 2. Push up to straighten your arms while keeping your back flat and your hips in line with your shoulders.\n\nSTEP 3. Slowly lower your body back into starting position and repeat.",
    "difficulty": "Beginner",
    "id": 168,
    "image": "kettlebell_pushup",
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
    "name": "kettlebell pushup",
    "target1": "chest",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Bend over at the waist holding the kettlebells with your arms straight and palms facing in, your feet hip-width apart.\n\nSTEP 2. Raise the kettlebells up and outward to shoulder height, keeping your back flat. Bend your elbows slightly as you lift if necessary, then lower the kettlebells back to the start position.",
    "difficulty": "Beginner",
    "id": 169,
    "image": "kettlebell_rear_delt_row",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "kettlebell rear delt row",
    "target1": "shoulders",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Get into pushup position with your hands on kettlebells, arms extended straight, and your toes providing support for your body, as illustrated.\n\nSTEP 2. Raise one kettlebell up to your shoulder, bending your elbows, shifting your weight to the opposite side of the body.\n\nSTEP 3. Lower the kettlebell back to the starting position and repeat with the other arm.",
    "difficulty": "Intermediate",
    "id": 170,
    "image": "kettlebell_renegade_row",
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
    "name": "kettlebell renegade row",
    "target1": "chest",
    "target2": "arms",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Sit on the floor with a kettlebell at your side. Put your legs together and bend your knees. Keep your chest lifted and back straight.\n\nSTEP 2. Pick up the kettlebell, holding it upside down by the handles for better control. It should be at chest height.\n\nSTEP 3. Lean back slightly, being careful not to round your back. Lift your feet off the floor but keep your knees together and legs bent.\n\nSTEP 4. Quickly twist from side to side, leading with the kettlebell. Your entire chest and head region should rotate while your legs stay stationary. Squeeze your abs throughout the exercise.",
    "difficulty": "Beginner",
    "id": 171,
    "image": "kettlebell_russian_twist",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "kettlebell russian twist",
    "target1": "abdominals",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Stand straight upright, holding a kettlebell by your side with your arm extended straight down.\n\nSTEP 2. Bend sideways to the opposite side, then return to your original position.\n\nSTEP 3. Hold a kettlebell in the other hand now, and bend to its opposing side.",
    "difficulty": "Beginner",
    "id": 172,
    "image": "kettlebell_side_bend",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "kettlebell side bend",
    "target1": "abdominals",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Stand with legs straight and a shoulder-width apart. Grasp a single kettlebell in both hands in front of your thighs with your arms extended straight.\n\nSTEP 2. Lower the kettlebell by bending your hips until your hamstrings are tight, or just before your lower back bends.\n\nSTEP 3. Hold, then lift the kettlebell by extending your hips until you are standing straight again. Pull your shoulders back slightly at the top of the lift. Repeat.",
    "difficulty": "Intermediate",
    "id": 173,
    "image": "kettlebell_straight_leg_deadlift",
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
    "name": "kettlebell straight-leg deadlift",
    "target1": "legs",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand upright, with feet shoulder-width apart, while holding a kettlebell in both hands. The kettlebell should be held in front of your body with your arms extended straight, as illustrated.\n\nSTEP 2. Raise the kettlebell upward to a level just below your chin, while keeping your elbows above your hands at the level of your ears.\n\nSTEP 3. Lower and repeat.",
    "difficulty": "Intermediate",
    "id": 174,
    "image": "kettlebell_upright_row",
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
    "name": "kettlebell upright row",
    "target1": "shoulders",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Grab hold of a pair of kettlebells and bend forward at your waist, but keep your back flat. Have your arms extended straight downward with palms facing in towards one another.\n\nSTEP 2. Lift the kettlebells up to the sides of your chest and return them to their extended start position while keeping your back stable and straight throughout.",
    "difficulty": "Intermediate",
    "id": 175,
    "image": "kettlebells_bent_over_row",
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
    "name": "kettlebells bent-over-row",
    "target1": "back",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Standing upright, hold a pair of kettlebells by your side with arms extended downward.\n\nSTEP 2. Step to one side and lower your body down as you lean your torso slightly forward. Keep the stationary leg straight throughout the movement.\n\nSTEP 3. Push off of the bent leg to return to the starting position. Repeat with the other leg.",
    "difficulty": "Intermediate",
    "id": 176,
    "image": "kettlebells_side_lunge",
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
    "name": "kettlebells side lunge",
    "target1": "legs",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Hold a pair of kettlebells as you stand upright with your feet shoulder-width apart.\n\nSTEP 2. Gradually lower your body toward the floor as you bend your knees and send your hip backward.\n\nSTEP 3. Return to start position by reversing the motion. Keep your back straight throughout the down and back movement.",
    "difficulty": "Advanced",
    "id": 177,
    "image": "kettlebells_squat",
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
    "name": "kettlebells squat",
    "target1": "legs",
    "type": "kettlebell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Attach to the high pulley, the rope handle, and grab onto it. While facing the machine, kneel in front of the weights with your butt near your heels, but not resting on them. Hold the ropes at the sides of your face with your elbows pointing straight down to the floor.\n\nSTEP 2. Bring your rib cage toward your pelvis, making sure to avoid moving other parts of your lower body from the original position. Pause aas your elbows near your knees, the return to starting position. Repeat.",
    "difficulty": "Intermediate",
    "id": 178,
    "image": "kneeling_cable_crunch",
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
    "name": "kneeling cable crunch",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "This exercise works both the back and biceps effectively.\n\nSTEP 1. Sitting on a bench, grab a bar with a false overhand - thumb on the same side as your fingers - shoulder-width grip.\n\nSTEP 2. As you pull your shoulder blades together and down, while sticking your chest out, pull the bar to your chest. Then, pause with the bar an inch or so from your chest, and slowly let it rise to where it began. Throughout, keep your chest out.",
    "difficulty": "Beginner",
    "id": 179,
    "image": "lat_pulldown",
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
    "name": "lat pulldown",
    "target1": "arms",
    "target2": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells and stand 2-3 feet from an exercise bench. Place your right foot on the bench and the left foot on the floor.\n\nSTEP 2. Drive your right heel down and pull your left leg up but only allow your left toes to touch the bench.\n\nSTEP 3. Lower your left leg first, and then your right. Repeat, this time lunging up with your left leg.",
    "difficulty": "Beginner",
    "id": 180,
    "image": "lunging_step_up",
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
    "name": "lunging step up",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Lie on the floor and place your heels up on a chair, keep your knees slightly bend, and your arms at your sides.\n\nSTEP 2. Pushing with your glutes and hamstrings, dig the heels of your feet down and lift your hips until your body forms a ramp. Pause, and slowly return to your starting position.",
    "difficulty": "Beginner",
    "id": 181,
    "image": "lying_hip_extension_no_weight",
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
    "name": "lying hip extension (no weights)",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "Do not let your upper arm move as you perform the exercise. The only body part that should move is your lower arm as you bend your elbow and lower the weight.\n\nSTEP 1. Lie on a bench with your knees bent and feet flat on the floor. Hold a fairly light dumbbell in your left hand and straighten the arm so that the weight is above your shoulder. Use your right hand to reach across your chest and up the upper part of your left arm to help stabilize it.\n\nSTEP 2. Turn the weight so that your palm faces in. Without moving your upper arm, bend your elbow and slowly lower the dumbbell until it reaches the side of your head.\n\nSTEP 3. Slowly press the weight back up above you. Finish the set, then switch positions to work your right arm.",
    "difficulty": "Intermediate",
    "id": 182,
    "image": "lying_one_arm_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying one-arm extension",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells or a barbell and lie on your back on a bench. Hold the weight overhead with your arms straight and palms facing away from you.\n\nSTEP 2. Lower the weights behind your head as far as you can.\n\nSTEP 3. Pull the weights back to the starting position. Then, turn your palms toward each other and bend your elbows to lower the weight to your forehead.\n\nSTEP 4. Straighten your arms back to starting position.",
    "difficulty": "Intermediate",
    "id": 183,
    "image": "lying_pullover",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying pullover",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Begin by grabbing a pair of dumbbells and lying on a bench. With a neutral, shoulder-width grip, keep your arms straight as you hold the dumbbells up over your forehead.\n\nSTEP 2. Bend your elbows as you lower the weights down to the sides of your forehead. Try keeping your upper arms in the same position, and pause when your elbows are bent just past 90 degrees. Return to the starting position.",
    "difficulty": "Advanced",
    "id": 184,
    "image": "lying_triceps_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "lying triceps extension",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "This is a basic but effective exercise for beginners that builds up the size and strength of your biceps muscles.\n\nSTEP 1. Sit with your chest against the chest support, keeping your back straight with your arms over the front of the pad and your arms facing up. Grip the handles, keeping your arms parallel to each other, and make sure that you are comfortable before you start the exercise.\n\nSTEP 2. Exhale, slowly pulling the bar toward you shoulders by bending at the elbow but with your arms staying parallel at the elbow but with your arms staying parallel and your shoulders still. Raise the bar as close to your shoulders as is comfortable, inhale and slowly return to the starting position.",
    "difficulty": "Beginner",
    "id": 185,
    "image": "machine_biceps_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "machine biceps curl",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "description": "This is a good finishing exercise that can also be used to isolate the chest muscles. It works within a fixed range of motion so there is little chance that any errors will creep in or any injury occur.\n\nSTEP 1. Adjust the seat height so that your upper arms are parallel to the floor. Depress the foot level (if necessary) and grasp the handholds, pushing your forearms into the pads.\n\nSTEP 2. Keeping your back straight, sit tall and brace your shoulders and chest, and keeping the movement under control bring your arms together in front of your chest until the pads meet.\n\nSTEP 3. Hold for a second, contracting your chest, and then return to the start position, with the movement under complete control, and repeat for the desired number of reps.",
    "difficulty": "Beginner",
    "id": 186,
    "image": "machine_chest_flye",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "machine chest flye",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "description": "This is a good, basic chest exercise that is ideal for building basic upper-body strength, especially in the front of the shoulders and triceps muscle in the upper arm.\n\nSTEP 1. Adjust the seat height so the handles are in line with your mid-chest area.\n\nSTEP 2. Keeping your wrists, elbows, and shoulders in line, push forward, extending your arms and keeping your back straight against the seat.\n\nSTEP 3. Do not snap your arms out - instead, keep a slight bend in your elbow when your arms are at their full extension.\n\nSTEP 4. Return to the start position, keeping the movement under control and maintaining the alignment of your wrists, elbows, and shoulders. Aim to feel a slight stretch in the chest area when returning back.",
    "difficulty": "Beginner",
    "id": 187,
    "image": "machine_chest_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "machine chest press",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "Like the Assisted Pull-Up, this exercise not only works the back muscles but also the biceps muscles and the muscles of the forearms, improving the strength of your grip. It is a good exercise for beginners because it allows them to build up strength before progressing to body-weight pull-ups and chin-ups.\n\nSTEP 1. Adjust the kneepads to comfortably support your legs and to help stabilize weight then stand up and grip the bar with your hands a shoulder-width apart before pulling the bar back down and taking your place under the knee support.\n\nSTEP 2. Stay seated and extend your arms up and above your position, then pull the bar down until it reaches your upper chest.\n\nSTEP 3. Make sure that your shoulders are down and your elbows pulled back and hold for a second before returning to the start position.\n\nSTEP 4. Slowly extend your arms back up, stretching fully and keeping your \"tall\" posture. Repeat for the desired number of reps.",
    "difficulty": "Beginner",
    "id": 188,
    "image": "machine_lateral_pull_down",
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
    "name": "machine lateral pull-down",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "description": "This exercise isolates the medial head of the shoulder, but because its movement is fixed there is little room for error. This makes the exercise an ideal one for beginners.\n\nSTEP 1. Adjust the seat height so that the center of your shoulder aligns with the machine's rotational axis.\n\nSTEP 2. Keeping your back tall, brace your shoulders and life your arms to the horizontal while keeping your shoulders down. Maintain correct posture.\n\nSTEP 3. Return your arms to the starting position, keeping the movement under control.",
    "difficulty": "Beginner",
    "id": 189,
    "image": "machine_lateral_raise",
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
    "name": "machine lateral raise",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "This is a basic but effective exercise that promotes the development of the hamstrings.\n\nSTEP 1. Lay face down on the machine, with its leg pad just above your heels and make sure that your knees line up with its pivot points.\n\nSTEP 2. Slowly exhale and pull your heels toward your hips, flexing your knees as much as you need to for comfort.\n\nSTEP 3. When you have moved as far as you can without any sense of straining, inhale and slowly return your heels to the starting position.",
    "difficulty": "Beginner",
    "id": 190,
    "image": "machine_leg_curl",
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
    "name": "machine leg curl",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "This is a good basic exercise that develops the quadriceps.\n\nSTEP 1. Position your lower legs behind the shin pad, making sure that the pad is on the lower part of your shins rather than your ankles. Line your knee up with the pivot points on the machine and make sure that your starting position is comfortable.\n\nSTEP 2. Exhale and extend your legs at the knee - stop the movement just before your legs become straight.\n\nSTEP 3. Inhale and slowly return your legs to the starting position.",
    "difficulty": "Beginner",
    "id": 191,
    "image": "machine_leg_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 10
      }
    ],
    "name": "machine leg extension",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Gastrocnemius": {},
        "Glutes": {}
      }
    },
    "description": "This is a useful exercise for beginners that develops all the major muscles in the leg, but particularly the quadriceps and the gluteal muscles.\n\nSTEP 1. Place your feet a hip-distance apart on the footplate with your toes facing forward, and set the seat so that you have a 90 degree angle at the knee.\n\nSTEP 2. Exhale and slowly push your feet away, making sure that you keep them flat on the footplate.\n\nSTEP 3. Push out to a point at which you still have a slight amount of flexion at your knees.\n\nSTEP 4. Inhale and slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 192,
    "image": "machine_leg_press",
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
    "name": "machine leg press",
    "target1": "legs",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Sit on the machine and adjust your seat so that the handles are at shoulder level.\n\nSTEP 2. Holding the handles, pull them in the motion illustrated while keeping your arms parallel to the floor. At the most posterior extension, press your shoulder blades together to get the maximum effect.\n\nSTEP 3. Slowly return your arms to the starting position. Remember to keep your chest pressed across the pad throughout all motions.",
    "difficulty": "Beginner",
    "id": 193,
    "image": "machine_rear_raise",
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
    "name": "machine rear raise",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "description": "This is a very good strength exercise that can build good base level of muscle in the shoulder region. There is a fixed plan of motion, so little technical ability is needed to make the exercise effective. A great all-round shoulder exercise.\n\nSTEP 1. Adjust the seat height, aligning the horizontal handles with the top of your shoulders. Depress the foot level and ensure that your back is comfortably supported. Sit tall in the seat.\n\nSTEP 2. Push up, extending your arms over your head in a controlled manner. Avoid any snapping or locking out of the elbows.\n\nSTEP 3. Return to the start position in a controlled way and complete the remainder of your reps.",
    "difficulty": "Intermediate",
    "id": 194,
    "image": "machine_shoulder_press",
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
    "name": "machine shoulder press",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "This is a simple beginner's exercise that allows you to lift heavy weights and gives your triceps muscles a good all-round shape.\n\nSTEP 1. Adjust the pad to support your chest. Sit with your chest against the pads and bring the handles up. Grasp the handles with your palms facing each other and arms parallel to each other, resting the back of your arms on the chest pad. Maintain a straight back by pushing your hips toward the back of the seat.\n\nSTEP 2. Without letting your shoulders rise, and keeping your arms parallel to each other, exhale and push the handles down and away from you.\n\nSTEP 3. Push until your arms are straight, then inhale as you slowly return to the start position.",
    "difficulty": "Beginner",
    "id": 195,
    "image": "machine_triceps_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "machine triceps extension",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your back with your arms and legs straight up in the air holding a ball in your hands.\n\nSTEP 2. Reach the ball towards your toes, lifting your head and shoulders off the floor. Remember to focus on using your ab muscles to pull yourself up, as opposed to using momentum.",
    "difficulty": "Beginner",
    "id": 196,
    "image": "medicine_ball_toe_touch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "medicine ball toe touch",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "This is another way to make the traditional pushup considerably easier. Once you have gained some strength, consider doing more difficult forms of the pushup Less than 70% of the bodyweight is used in doing this exercise.\n\nSTEP 1. Get down on all fours and place your hands on the floor so that they are slightly wider than your shoulders. Cross your ankles behind you as illustrated.\n\nSTEP 2. Lower your body until your chest nearly touches the ground, pause, then push yourself back to the starting position. Maintain proper form throughout by preventing your hips from sagging at any point, keep your core stiff by bracing your abdominal muscles and straighten your legs while placing your weight on your toes.\n\nSTEP 3. Repeat.",
    "difficulty": "Beginner",
    "id": 197,
    "image": "modified_pushup",
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
    "name": "modified pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While lying on your back, straighten your legs, raise your heels an inch off the floor, and place your hands by your sides.\n\nSTEP 2. Keeping your arms parallel to the floor, lift your torso and legs so they form a \"v\" shape. As you raise yourself, bend your knees and pull them up toward your chest.\n\nSTEP 3. Return to starting position and repeat.",
    "difficulty": "Beginner",
    "id": 198,
    "image": "modified_v_sit",
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
    "name": "modified v-sit",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Hang from the parallel chinup bars using an overhand grip, with your palms facing each other. Cross your ankles behind you. Then, pull yourself up until your chest is as close to your hands as possible.\n\nSTEP 2. Pause, then slowly lower yourself to the starting position.",
    "difficulty": "Advanced",
    "id": 199,
    "image": "neutral_grip_pullup",
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
    "name": "neutral-grip pullup",
    "target1": "back",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your side with your body in a straight line and your arms crossed against your chest.\n\nSTEP 2. Life your legs off the floor, making sure to keep them tightly bound together. You should feel your obliques contracting, even though there isn't too much motion involved.\n\nSTEP 3. Pause, then slowly return to the starting position. Repeat as many times as needed, then switch sides.",
    "difficulty": "Intermediate",
    "id": 200,
    "image": "oblique_vup",
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
    "name": "oblique v-up",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Hold a light dumbbell by your side as you lift your right foot so that you are balancing on your left. Then, raise your right arm straight out in front of you to shoulder level, as illustrated.\n\nSTEP 2. Squat down in this position until your thigh is close to parallel to the floor (or as close as you can get it).\n\nSTEP 3. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 201,
    "image": "offset_squat",
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
    "name": "offset squat",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Use your non-dominant hand to hold a dumbbell, while placing your dominant hand and knee on a bench, as illustrated.\n\nSTEP 2. Keep your back flat as you let the dumbbell hang down to your side so your arm lines up just in front of your shoulder.\n\nSTEP 3. Pull the dumbbell upward and back toward your hip while keeping your elbow close to your body. Focus on using your upper-back muscles in doing this motion. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 202,
    "image": "one_arm_row",
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
    "name": "one-arm row",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise helps give the triceps muscles an excellent shape and increased size, and also works the muscles that help stabilize the shoulder.\n\nSTEP 1. Lie flat on your back on a bench and bring your feet up to the edge of the bench, keeping your feet, knees, and hips in line. Hold the bar above your body with your hands a shoulder-width apart and your elbows, wrists, and shoulders in a vertical line.\n\nSTEP 2. Inhale and slowly lower the bar toward your forehead by flexing your arms at the elbows - keep your arms parallel to each other and your elbows pointing up.\n\nSTEP 3. Stop the movement a safe and comfortable distance away from your forehead, then slowly exhale and extend your arms at the elbow to push back to the start position.",
    "difficulty": "Advanced",
    "id": 203,
    "image": "overhead_bar_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "overhead bar press",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Grab a barbell with a shoulder-width, overhead grip. Hold the bar at arm's length over your head.\n\nSTEP 2. Without moving your upper arms, bend your elbows to lower the bar behind your head until your fore-arms are just past parallel to the floor.\n\nSTEP 3. Pause in this position, then return the bar to the starting position by straightening your arms.",
    "difficulty": "Intermediate",
    "id": 204,
    "image": "overhead_triceps_extension",
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
    "name": "overhead triceps extension",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Grab onto parallel dip bars (as illustrated) and lift yourself so your arms are straight.\n\nSTEP 2. Keep your elbows tucked close to your body as you slowly lower yourself by bending your elbows until your upper arms are parallel to the floor.\n\nSTEP 3. Pause, then push yourslef up the starting position.",
    "difficulty": "Advanced",
    "id": 205,
    "image": "prallel_bar_dip",
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
    "name": "parallel bar dip",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Squat on the floor with thighs running parallel to the floor. Hold a pair of dumbbells using an overhand grip and allow them to rest on the floor before your feet.\n\nSTEP 2. Keep your torso erect with a slight arch in your lower back. Then, with power from your legs, straighten yourself in a sudden movement as you drag the weights up along the front of your body towards your chest.\n\nSTEP 3. As you go up on the balls of your feet, quickly drop underneath the weights and \"catch\" them on your shoulders while keeping your elbows elevated. Immediately lower them in front of you and descend to the starting position.",
    "difficulty": "Advanced",
    "id": 206,
    "image": "power_clean",
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
    "name": "power clean",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Stand with your feet slightly wider than shoulder-width apart and lace your fingers behind your head.\n\nSTEP 2. Keeping your elbows back, bend at the hips and knees to lower your body until your thighs are parallel to the floor.\n\nSTEP 3. Press back up to the starting position and repeat.",
    "difficulty": "Beginner",
    "id": 207,
    "image": "prisoner_squat",
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
    "name": "prisoner squat",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "This exercise helps develop the strength of the spinal muscles and the muscles that retract the shoulder blades, and also improves spinal mobility - it is a useful exercise for anyone who sits at a desk for long periods.\n\nSTEP 1. Lie face down on the floor with your arms beside your hips and your palms facing up. Activate your core muscles by drawing your abdominals toward your spine and squeezing your gluteals.\n\nSTEP 2. Slowly exhale and lift your chest off the floor and your arms up and backward toward your hips. Rotate your thumbs toward the ceiling as you carry out the movement.\n\nSTEP 3. Pause at the top of the movement for two seconds, then return to the start position.",
    "difficulty": "Intermediate",
    "id": 208,
    "image": "prone_cobra",
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
    "name": "prone cobra",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "This exercise places your arms slightly forward and away from your body and helps to place the emphasis on your biceps. It is harder to use momentum to do the exercise, so you will find it harder to do than the traditional biceps curl.\n\nSTEP 1. Set an incline bench at a 45-degree angle and grab a dumbbell in each hand.\n\nSTEP 2. Sit down on the bench so that you are facing the incline and rest your chin, chest and stomach flat along the backrest of the bench. Let your arms hang straight down and turn your hands out so that your palms face forward.\n\nSTEP 3. Without moving your upper arms, slowly curl the weights up until the dumbbells reach your shoulders - your palms should now be facing in toward your body.\n\nSTEP 4. Flex your biceps, then slowly lower your arms back down.\n\nSTEP 5.  Repeat.",
    "difficulty": "Beginner",
    "id": 209,
    "image": "prone_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "prone curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Wrist Extensors": {},
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Set an incline bench to a 45-degree angle. Grab a pair of dumbbells with your arms hanging by your side, palms facing inward.\n\nSTEP 2. Raise the dumbbells upward to roughly your shoulder height by bending your elbows. Remember to keep your wrists straight and avoid placing a bend into them.",
    "difficulty": "Intermediate",
    "id": 210,
    "image": "prone_hammer_curl",
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
    "name": "prone hammer curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "This exercise places your arms slightly forward and away from your body and helps to place the emphasis on your biceps. It is harder to use momentum to do the exercise, so you will find it harder to do than the traditional biceps curl.\n\nSTEP 1. Set an incline bench at a 45-degree angle and grab a dumbbell in each hand.\n\nSTEP 2. Sit down on the bench so that you are facing the incline and rest your chin, chest and stomach flat along the backrest of the bench. Let your arms hang straight down and turn your hands so that your palms face behind you - this is what makes it a reverse curl.\n\nSTEP 3. Without moving your upper arms, slowly curl the weights up until the dumbbells reach your shoulders - your palms should now be facing in toward your body.\n\nSTEP 4. Flex your biceps, then slowly lower your arms back down.\n\nSTEP 5.  Repeat.",
    "difficulty": "Beginner",
    "id": 211,
    "image": "prone_reverse_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "prone reverse curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Lie on your back with your hands underneath your tailbone and have your legs straight upward, as illustrated.\n\nSTEP 2. Pull your navel inward and flex your glutes as you lift your hips just a few inches off the floor. Then lower your hips.",
    "difficulty": "Intermediate",
    "id": 212,
    "image": "pulse_up",
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
    "name": "pulse up",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Place a loaded barbell on a rack at about your upper-chest level. Grasp the bar with both hands, and lift it off the rack and support it on your shoulders.\n\nSTEP 2. Dip your body by slightly bending the knees, hips, and ankles.\n\nSTEP 3. Suddenly drive upward with your legs, pushing the barbell up off your shoulders and vigorously extending your arms overhead until your elbows are locked.\n\nSTEP 4. Return the barbell back to your shoulders and repeat.",
    "difficulty": "Advanced",
    "id": 213,
    "image": "push_press",
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
    "name": "push press",
    "target1": "legs",
    "target2": "shoulders",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Pushups are basically a form of bench pressing without the bench. Keep your hands slightly wider than shoulder width apart, and maintain a straight and rigid torso.\n\nSTEP 2. Lower your chest to the ground slowly and raise it back up. The difficulty of the exercise can be increased by elevating the legs by placing them on a bench for example.",
    "difficulty": "Beginner",
    "id": 214,
    "image": "pushup",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Infraspinatus": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells so that your thumbs are turned toward each other. Focus on keeping your back flat, elbows slightly bent, as you lean forward at the waist as far as you can. Let the dumbbells hang at arm's length.\n\nSTEP 2. Slowly raise the dumbbells as high as you can without changing the bend in your elbows or bending your back. Pause, then lower the dumbbells to the starting position.",
    "difficulty": "Intermediate",
    "id": 215,
    "image": "rear_lateral_raise",
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
    "name": "rear lateral raise",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Loop the resistance band over any stationary object. Ensure the bands are anchored high enough to provide resistance. Standing upright, hold the resistance band handles with your arms straight in front and your palms facing outward.\n\nSTEP 2. Raise the handles up to the level of your shoulders by bending your elbows.\n\nSTEP 3. Return the handles to the start position by straightening your arms and having your palms face out once more.",
    "difficulty": "Intermediate",
    "id": 216,
    "image": "resistance_band_biceps_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "resistance band biceps curl",
    "target1": "arms",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. While standing upright, hold onto the handles of a resistance band with your arms straight out in front of your at the level of your shoulders. Ensure the resistance band is wrapped around an object to provide resistance.\n\nSTEP 2. Pull the handles straight into your chest by bending your elbows and squeezing your shoulder blades together. Throughout the movement, hold steady and remain straight upright.",
    "difficulty": "Intermediate",
    "id": 217,
    "image": "resistance_band_close_row",
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
    "name": "resistance band close row",
    "target1": "back",
    "target2": "arms",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Wrap resistance band around an object, or have someone hold it for you at the middle. While lying on your back with your feet raised and knees bent, hold the resistance band handles by the side of your head.\n\nSTEP 2. Lift your head and shoulders off of the floor while making sure to keep your knees bent and your legs steady.\n\nSTEP 3. Lower your head and shoulders to the starting position and repeat.",
    "difficulty": "Intermediate",
    "id": 218,
    "image": "resistance_band_crunch",
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
    "name": "resistance band crunch",
    "target1": "abdominals",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand upright on the middle of a resistance band while holding each end in your hands with an underhand grip. Make sure your hands are straight.\n\nSTEP 2. Raise the handles up the level of your shoulders, while ensuring that your elbows stay by your sides.\n\nSTEP 3. Pause, then gradually lower to starting position and repeat.",
    "difficulty": "Beginner",
    "id": 219,
    "image": "resistance_band_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "resistance band curl",
    "target1": "arms",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lying on your back, extend your legs straight up toward the ceiling with the resistance band placed over your heels. Hold the handles of the band on the floor, as illustrated so that the band is fairly firm.\n\nSTEP 2. Push your feet upwards toward the ceiling by raising your hips off of the floor. Keep your hands locked in position and steady.\n\nSTEP 3. Return to the starting position and repeat.",
    "difficulty": "Beginner",
    "id": 220,
    "image": "resistance_band_hip_raise",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "resistance band hip raise",
    "target1": "abdominals",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Loop the resistance band over any stationary object. Ensure the bands are anchored high enough to provide resistance. From a kneeling position, place the resistance band handles against the forehead area.\n\nSTEP 2. Crunch your abdominal muscles as you move your elbows toward the middle of your thighs. Exhale as you contract the abs and try to keep your hips still.\n\nSTEP 3. Slowly return to the starting position and repeat.",
    "difficulty": "Intermediate",
    "id": 221,
    "image": "resistance_band_kneeling_crunch",
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
    "name": "resistance band kneeling crunch",
    "target1": "abdominals",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Loop the resistance band over any stationary object. Ensure the band is anchored high enough to provide resistance. Standing upright, hold one handle in both hands at around the level of your abdomen. Keep your elbows bent and have the band run along to one side of your body, as illustrated.\n\nSTEP 2. Step forward by dropping your back knee to the floor and leaning slightly forward with your torso so that you are placing your weight on the forward leg.\n\nSTEP 3. Push off your leading foot to return to your starting position. Throughout the movement, keep your hands stationed at the same level relative to your body and do not change the degree of bend in your elbow.",
    "difficulty": "Intermediate",
    "id": 222,
    "image": "resistance_band_lunge",
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
    "name": "resistance band lunge",
    "target1": "legs",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Stand on the midportion of the resistance band, holding one handle at shoulder height with your elbow bent and your palms facing out. Leave the other end on the floor, as illustrated.\n\nSTEP 2. Press the handle overhead, extending your arm fully upward.\n\nSTEP 3. Return to starting position and repeat.",
    "difficulty": "Beginner",
    "id": 223,
    "image": "resistance_band_overhead_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "resistance band overhead press",
    "target1": "shoulders",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Loop the resistance band over any stationary object. Ensure the bands are anchored high enough to provide resistance. Standing upright, hold the resistance band handles behind your head with your elbows bent.\n\nSTEP 2. Straighten your arms up overhead, keeping your shoulders steady throughout the motion.\n\nSTEP 3. Return the handles to the start position by bending your elbows once more.",
    "difficulty": "Intermediate",
    "id": 224,
    "image": "resistance_band_overhead_triceps_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "resistance band overhead triceps extension",
    "target1": "arms",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Hold either end of a resistance band with both hands. Swing it over your head so it's resting on your upper back, underneath your shoulders and keep your knees where they are, or straighten our your legs so your body is in a plank position. The band should feel snug, neither too tight nor too loose, so make adjustments if needed.\n\nSTEP 2. Now bend your elbows out to the side and lower your chest toward the ground. Stop as soon as your shoulders are in line with your elbows.\n\nSTEP 3. Then straighten your arms and return to starting position.",
    "difficulty": "Beginner",
    "id": 225,
    "image": "resistance_band_push_up",
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
    "name": "resistance band push up",
    "target1": "chest",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Stand on the middle of the resistance band with feet shoulder-width apart. Hold opposing handles in front of your thighs with arms hanging down - as illustrated. The resistance band should be crossing over one another.\n\nSTEP 2. Shrug your shoulders by raising them as high as possible while keeping your arms straight.\n\nSTEP 3. Hold for a few seconds, then return to the starting position.",
    "difficulty": "Beginner",
    "id": 226,
    "image": "resistance_band_shrug",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "resistance band shrug",
    "target1": "shoulders",
    "type": "bands"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back on the floor and raise your head and upper shoulders off the mat slightly. Lace your fingers from both hands together behind your inclined head for support while keeping your elbows wide apart. Do NOT bend your head toward your chest, keep it perpendicular to your torso but bend your knees 90 degrees, and raise your feet 1-2 inches off of the floor.\n\nSTEP 2. Then, lift your knees in a smooth arc toward your head while keeping everything else as still as possible. Once your knees are directly above your upper abdomen, pause, contract the abs, and then lower your feet back down slowly in reverse. Do not let them touch the floor though and ensure you continue to maintain tension in your abdominal muscles.",
    "difficulty": "Intermediate",
    "id": 227,
    "image": "reverse_crunch",
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
    "name": "reverse crunch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Lie facedown on a bench, but allow your legs to hang off the end. Wrap your arms around the underside of the bench.\n\nSTEP 2. Lower your legs as far as you are able, then, while keeping your legs straight and together, lift them until they are just past being parallel to the floor.\n\nSTEP 3. Pause, then lower and repeat.",
    "difficulty": "Beginner",
    "id": 228,
    "image": "reverse_hyperextension",
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
    "name": "reverse hyperextension",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Wrist Extensors": {}
      }
    },
    "description": "STEP 1. Hold a barbell, or an EZ-curl bar with an overhand grip and kneel facing the long side of a bench, as shown.\n\nSTEP 2. Rest your forearms on the bench with your wrists hanging off the other side. Lower the bar as far as possible.\n\nSTEP 3. Raise the bar by bringing the backs of your hands toward your elbows.",
    "difficulty": "Beginner",
    "id": 229,
    "image": "reverse_wrist_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 5
      }
    ],
    "name": "reverse wrist curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Sit with your knees bent and your heels on the floor. Keep your torso upright, shoulders back, and arms extended forward, parallel to the floor. Inhale while keeping your stomach pulled in.\n\nSTEP 2. Roll backward, rounding your spine while you hold your chin to your chest. Stop two-thirds of the way to the floor.\n\nSTEP 3. Exhale, and return to the starting position. As you gain strength, roll back closer to the floor.",
    "difficulty": "Beginner",
    "id": 230,
    "image": "rollback",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "rollback",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Hold an empty barbell bar with an overhand grip, shoulder-width apart, and stand with feet hip-width apart with knees slightly bent.\n\nSTEP 2. Hold a barbell with straight arms in front of your thighs and without rounding your back or changing the slight bend in your knees, lean forward from your waist while lowering the bar until your torso is parallel to the floor.\n\nSTEP 3. Pause, then rise to the start position.",
    "difficulty": "Beginner",
    "id": 231,
    "image": "romanian_barbell_deadlift",
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
    "name": "romanian barbell deadlift",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Use an overhand grip to hold a barbell that is fairly wide for comfort. Hold the bar down at arm's length in front of you and make sure that your feet are roughly hip-width apart with knees slightly bent.\n\nSTEP 2. Keep your lower back also slightly arched and bend slowly at the hips as far as you can without losing the arch. Try not to change the angle of your knees, and ensure that you keep the bar close to your body throughout the process.\n\nSTEP 3. Remember to pause, then lift your torso back to the starting position.",
    "difficulty": "Intermediate",
    "id": 232,
    "image": "romanian_deadlift",
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
    "name": "romanian deadlift",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Start out in the classic pushup position, but as you are pushing yourself upward, rotate your body so your right arm lifts up and extends overhead, as illustrated. Your arms and torso should form a T.\n\nSTEP 2. Return to the starting position, lower ourself, the push up and rotate until our left hand points toward the ceiling.",
    "difficulty": "Advanced",
    "id": 233,
    "image": "rotational_pushup",
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
    "name": "rotational pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "description": "As with the internal rotator-cuff exercise, this exercise helps prevent injuries to the shoulder girdle, and is extremely effective. It works the external layer of rotator-cuff muscles beneath the shoulder muscles. Doing this exercise is an ideal way of finishing a shoulder workout or a rehab routine. In conjunction with the internal rotator cuff-exercise it plays an important part in the wind-up of a shoulder workout or rehab routine.\n\nSTEP 1. Stand facing away from the cable machine, take up the handle, keep your forearm parallel to the floor, and fix your elbow in to the side of your body.\n\nSTEP 2. Rotate your upper arm out, bring your forearm away from your body and out, away from the midline.\n\nSTEP 3. Take the handle out to the side as much as possible within your own range of motion, and hold for a second before bringing it back in toward your navel.",
    "difficulty": "Beginner",
    "id": 234,
    "image": "rotator_cuff_external",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "name": "rotator cuff - external",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "description": "This exercise helps prevent injuries to the shoulder girdle and is very effective. It works the small but important internal rotator-cuff muscles beneath the shoulder muscles. Doing this exercise is an ideal way of finishing a shoulder workout or a rehab routine.\n\nSTEP 1. Stand facing away from the cable machine. Take up the handle with your forearm parallel to the floor and at 90\u00b0 to your body and your elbow pulled in to your side.\n\nSTEP 2. Slowly rotate your forearm in toward the midline of your body, ensuring that your elbow stays against your side. Bring it all the way in until your forearm reaches your navel and hold for a second before releasing.\n\nSTEP 3. Keeping the movement under control, release back out to the start position. Make sure that the movement is strict with no jerking and that you do not cheat by using other muscle groups.",
    "difficulty": "Beginner",
    "id": 235,
    "image": "rotator_cuff_internal",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 19
      }
    ],
    "name": "rotator cuff - internal",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Hold a pair of light dumbbells with an overhand grip overhead, keeping your elbows only slightly bent.\n\nSTEP 2. Keep your back straight as you slowly bend directly to your left side. Keep going as far as possible while avoiding twisting your upper body.\n\nSTEP 3. Pause, then return to an upright position, and repeat on the other side of the body.",
    "difficulty": "Beginner",
    "id": 236,
    "image": "saxon_side_bend",
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
    "name": "saxon side bend",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Standing with your feet shoulder-width apart, hold a pair of dumbbells at arm's length next to your sides. Your palms should be facing each other and your elbows slightly bent.\n\nSTEP 2. Without changing the bend in your elbows, raise your arms at a 30-degree angle to your body (so that they form a Y) until they are at shoulder level.\n\nSTEP 3. Pause, then slowly lower the weights back to the starting position.",
    "difficulty": "Beginner",
    "id": 237,
    "image": "scaption",
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
    "name": "scaption",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "description": "STEP 1. Sit on the end of a bench with your knees bent, feet flat on the floor and place a pair of dumbbells on the floor at your sides. Bend forward at the waist as far as you can until your back is almost parallel to the floor - your chest should touch your legs. Reach down, grab a weight in each hand, and let your arms hang straight down.\n\nSTEP 2. Turn the weights so that your palms face in.\n\nSTEP 3. Without moving anything but your arms, slowly pull the dumbbells up close to your body to the sides of your chest.\n\nSTEP 4. Hold for a second, then lower the weights back down.",
    "difficulty": "Intermediate",
    "id": 238,
    "image": "seated_bent_over_row",
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
    "name": "seated bent over row",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Infraspinatus": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Sit on the end of a bench - or a sturdy chair - with a dumbbell in each hand.\n\nSTEP 2. Bring the weights up to the sides of your shoulders - your elbows should be pointing down with your knuckles pointing toward the ceiling.\n\nSTEP 3. Turn the weights so that your palms face forward.\n\nSTEP 4. Keeping your back straight, slowly press the weights over your head until your arms are extend above you, elbows unlocked.\n\nSTEP 5.  Slowly lower the weights back down to your shoulders.",
    "difficulty": "Beginner",
    "id": 239,
    "image": "seated_dumbbell_shoulder_press",
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
    "name": "seated dumbbell shoulder press",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Pectoralis": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Grab a pair of dumbbells and take a seated position on an incline bench with arms straight and at your sides, thumbs in.\n\nSTEP 2. Keeping your elbows straight, raise the dumbbells up and forward until your hands are at about eye level.\n\nSTEP 3. Keep the backs of your wrists flat and elbows straight throughout. Return to the starting position.",
    "difficulty": "Intermediate",
    "id": 240,
    "image": "seated_front_raise",
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
    "name": "seated front raise",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Sit on the edge of a bench and hold the seat behind you for support.\n\nSTEP 2. Extend your legs in front of you, knees bent slightly.\n\nSTEP 3. Now, simultaneously raise your legs toward your chest and bring your chest toward your knees.",
    "difficulty": "Intermediate",
    "id": 241,
    "image": "seated_jacknife",
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
    "name": "seated jackknife",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "description": "STEP 1. Using an underhand grip, hold onto a EZ-curl bar. Rest your upper arms on the sloping preacher bench, as illustrated, while holding the bar at an arm's length in front. Try to have a slight bend in your elbows of 5-10 degrees.\n\nSTEP 2. Lift the bar as high as possible while keeping your upper arms firmly planted on the pad.\n\nSTEP 3. Pause, then slowly return the bar to the starting position.",
    "difficulty": "Beginner",
    "id": 242,
    "image": "seated_preacher_curl",
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
    "name": "seated preacher curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Infraspinatus": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Sit on the front edge of a bench while holding a pair of fairly light dumbbells. Lean forward at the hips to get your chest as close to your thighs as you can without rounding your back.\n\nSTEP 2. As you hold the dumbbells with a neutral grip., let your arms hang down from your sides in line with your cables.\n\nSTEP 3. Raise the dumbbells up to either side of your body by making a wide, arcing motion with your arms until they are parallel to the floor and your elbows are just below shoulder level. Your wrists should be in the same plane as your ears before you return to your original position.\n\nVariations: Changing your grip from neutral to under-hand-grip directs the workout toward your external rotators while switching to an overhand grip shifts more work to your rear delts.",
    "difficulty": "Intermediate",
    "id": 243,
    "image": "seated_reverse_fly",
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
    "name": "seated reverse fly",
    "target1": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Sit on a bench, and grab a pair of dumbbells. Hold them so that they are at arm's length above your head with palms facing inward together.\n\nSTEP 2. Keep your upper arms stable as you lower the dumbbells behind your head until your forearms are just past parallel to the floor.\n\nSTEP 3. Pause, then straighten your arms to return the dumbbells to starting position.",
    "difficulty": "Beginner",
    "id": 244,
    "image": "seated_triceps_extension",
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
    "name": "seated triceps extension",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Sit upward with your back straight up but leaning slightly towards the floor, with your knees bent 90 degrees.\n\nSTEP 2. Hold a medicine ball close to your chest as you rotate your torso to the left. Then, place the ball on the floor behind you.\n\nSTEP 3. Rotate around to the right, pick up the ball, rotate left, and place it behind you. Keep your head in line with your torso throughout the movement, and perform it as quickly as possible.\n\nSTEP 4. Repeat.",
    "difficulty": "Beginner",
    "id": 245,
    "image": "seated_twist",
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
    "name": "seated twist",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Stand upright and hold two fairly heavy dumbbells at your sides, with your palms facing each other (neutral-grip).\n\nSTEP 2. Keep your shoulders relaxed. Shrug your shoulders as if you were trying to touch them to your ears.\n\nSTEP 3. Hold the top most position, then gradually lower them to the starting position. Do not bend your elbows or shift your head forward during the motion. Repeat.",
    "difficulty": "Beginner",
    "id": 246,
    "image": "shrug",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 7
      }
    ],
    "name": "shrug",
    "target1": "arms",
    "target2": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your side with your legs straight out. Turn sideways and raise your body off the floor, with one bent arm parallel to the floor.\n\nSTEP 2. Keep your abdominal muscles tight for 30-60 seconds. Try to keep your body in a straight line and your elbow directly under your shoulder.\n\nSTEP 3. Return to the starting position and repeat.",
    "difficulty": "Beginner",
    "id": 247,
    "image": "side_bridge",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "side bridge",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Keep your legs straight and extend your right arm along the floor (for balance) while lying on your right side. Cup your left hand behind your head while holding your head a few inches above the floor with your elbow pointing toward the ceiling, as shown. Remember to keep your head still (do not bend it toward your feet) throughout the movement phase.\n\nSTEP 2. Contract the muscles of the left side of your torso while moving your upper torso toward your feet so that your upper body curls in a smooth arc. Simultaneously, lift your legs upward, while keeping your ankles locked together, to form a \"V\" shape with your body. When your obliques are fully contracted, begin returning slowly to the starting position. Reverse your position afterward doing several repeats to work the right side of the body.",
    "difficulty": "Intermediate",
    "id": 248,
    "image": "side_crunch",
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
    "name": "side crunch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Grab a single dumbbell or weight plate and hold it with both hands in front of your chest as you stand with your feet shoulder-width apart.\n\nSTEP 2. Step as far as you can to your weaker side, keeping that foot pointing straight ahead. Push your hips back and squat down as far as possible, keeping your bent knee directly over your corresponding foot.\n\nSTEP 3. Push through your left heel to return to the starting position, then immediately lunge to your other side to finish one repetition.",
    "difficulty": "Advanced",
    "id": 249,
    "image": "side_lunge",
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
    "name": "side lunge",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rotator Cuff": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Lie on your left side, and bend your arm and rest your head on your left hand as shown.\n\nSTEP 2. Holding a light dumbbell in your right hand, bend your right arm 90 degrees and tuck your upper arm against your right side.\n\nSTEP 3. Let the weight hang in front of your midsection. Keep your upper arm still, and slowly rotate your forearm until it points toward the ceiling. Then rotate your forearm back to the starting position.",
    "difficulty": "Advanced",
    "id": 250,
    "image": "single_arm_external_rotation",
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
    "name": "single-arm external rotation",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Grasp a single handle that has been attached to a lateral-pulldown machine, palm facing forward, while sitting on the seat with your legs under the thigh pads and your back straight.\n\nSTEP 2. Pull the handle downward, straight and slowly, until your elbow touches your side. Refrain from twisting your back or arm during the downward pull.\n\nSTEP 3. Return to starting position smoothly in one swift motion.",
    "difficulty": "Intermediate",
    "id": 251,
    "image": "single_arm_pulldown",
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
    "name": "single-arm pulldown",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "If you feel strain on your lower back during this exercise, it is a sign that you are not keeping your core muscles tight during the downward movement.\n\nSTEP 1. Place one foot on a bench and hold the other in the air while in pushup position (as illustrated).\n\nSTEP 2. Lower your body until your chest nearly touches the ground, pause, then push yourself back to the starting position. Maintain proper form throughout by preventing your hips from sagging at any point, keep your core stiff by bracing your abdominal muscles and straighten your legs while placing your weight on your toes.\n\nSTEP 3. Repeat.",
    "difficulty": "Beginner",
    "id": 252,
    "image": "single_leg_decline_pushup",
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
    "name": "single-leg decline pushup",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Stand with your feet shoulder-width apart. Lift your stronger or dominant leg straight out in front of you, as high as possible.\n\nSTEP 2. Suck air into your stomach, then push your hips back and squat down as far as possible while keeping your torso as upright as possible. The heel of your front leg can touch the floor at the bottom of the squat, if you can get down that far.\n\nSTEP 3. Return to the starting position and exhale. Do all your reps with your nondominant leg, then repeat with your dominant leg.",
    "difficulty": "Beginner",
    "id": 253,
    "image": "single_leg_squat",
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
    "name": "single-leg squat",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "STEP 1. With your left hand, hold a dumbbell and stand on a step or block. For balance, place your right hand on something for balance (either a wall or a weight stack for example). Then, cross your right foot behind your left ankle and balance yourself on the ball of your left foot.\n\nSTEP 2. Lower your left heel to your full extend, pause for a few seconds, then lift it once more as high as possible. Finish the set with your left leg, and then repeat with your right foot while holding the dumbbell in your right hand.",
    "difficulty": "Beginner",
    "id": 254,
    "image": "single_leg_standing_calf_raise",
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
    "name": "single-leg standing calf raise",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. With your feet anchored under a sturdy object, lie with your knees bent. Then, fold your arms across your chest or just hold your hands behind your ears.\n\nSTEP 2. Use your abs to flex your spine and slowly lift your upper body. Finally, roll back down, slowly and with control. Repeat as desired.",
    "difficulty": "Intermediate",
    "id": 255,
    "image": "situp",
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
    "name": "situp",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Lean backward upon a wall with your feet 3 feet in front of you.\n\nSTEP 2. Bend your knees as you descend just a few inches down. Stop and hold that position for 30-45 seconds.\n\nSTEP 3. Slide down another few inches and stop again for another 30-45 seconds. Stop two or three more times as you work your way down until your butt is almost touching the floor. Return to the starting position.",
    "difficulty": "Intermediate",
    "id": 256,
    "image": "ski_squat_no_weight",
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
    "name": "ski squat (no weights)",
    "target1": "legs",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lying on your back, keep your hands at your side, legs extended straight, and heels held about 5 inches off of the floor.\n\nSTEP 2. Slowly, start sitting up while elevating your left arm with the elbow bent so it resembles a sprinter's pumping motion. At the peak of the situp, bring your right knee to your chest.\n\nSTEP 3. Return to the start, keeping your legs raised, and repeat with the opposite arm and leg.",
    "difficulty": "Intermediate",
    "id": 257,
    "image": "sprinter",
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
    "name": "sprinter",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand with your feet shoulder-width apart, bend forward at your waist, and place your arms 7 inches part on the ball, as illustrated. Your weight should be the balls of your felt and tense your abs and lower back to stabilize your body as you complete the pushup.\n\nSTEP 2. Remember, the farther away from the ball you are, the harder the exercise becomes.",
    "difficulty": "Intermediate",
    "id": 258,
    "image": "stabilizing_pushup",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 2
      }
    ],
    "name": "stabilizing pushup",
    "target1": "arms",
    "type": "swisball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "description": "This is a useful exercise that allows you to lift heavy weights and increase the size and strength of your biceps muscles. Experimenting with variations on the handgrip can help all-round development.\n\nSTEP 1. Stand tall with your feet a shoulder-width apart and your knees slightly flexed. Work your hands from the ends of the bar toward the middle, gripping the bar at the first bends you reach.\n\nSTEP 2. Inhale, then slowly raise the bar toward your shoulders as you exhale, keeping your elbows close to your sides without letting them travel forward.\n\nSTEP 3. Inhale and slowly return the bar to the starting position.",
    "difficulty": "Beginner",
    "id": 259,
    "image": "standing_biceps_curl",
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
    "name": "standing biceps curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand so that you have roughly twice your shoulder-width distance between your feet. Place a dumbbell on the floor between your feet. Bend forward at the hips to a flat-back position and grab the dumbbell with your nondominant hand. Make sure you place your other hand on the middle of your opposite thigh as support for your back. Keep your back flat, and let your weighted arm hang directly underneath your shoulder.\n\nSTEP 2. Curl the weight toward your face, moving only your forearm and making sure your elbow doesn't move back. Stop when the weight is about chin-high, pause, and slowly return to the starting position.\n\nSTEP 3. Finish the set with that arm and then repeat with the other.",
    "difficulty": "Intermediate",
    "id": 260,
    "image": "standing_concentration_curl",
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
    "name": "standing concentration curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Gastrocnemius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Soleus": {}
      }
    },
    "description": "STEP 1. Stand straight with your feet hip-width apart and hold a heavy dumbbell in each hand, arms by your sides.\n\nSTEP 2. Keeping your back straight, slowly rise up on the toes of both feet, raising your heels as high as you can.\n\nSTEP 3. Pause at the top, then slowly lower your heels back down.",
    "difficulty": "Beginner",
    "id": 261,
    "image": "standing_calf_raise",
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
    "name": "standing dumbbell calf raise",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Stand upright and hold a light dumbbell on either side of your lower chest, with forearms pointing straight down and upper arms out to the sides yet slightly lower than parallel to the floor.\n\nSTEP 2. Keep your shoulders relaxed. Shrug your shoulders as if you were trying to touch them to your ears.\n\nSTEP 3. Hold the top most position, then gradually lower them to the starging position. Do not bend your elbows or shift your head forward during the motion. Repeat.",
    "difficulty": "Intermediate",
    "id": 262,
    "image": "standing_scarecrow",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "standing scarecrow",
    "target1": "shoulders",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Attach a stirrup handle to the high cable and stand beside the weight stack as shown.\n\nSTEP 2. Grab the handle with your inside hand and pull down on the cable so that your palm is in line with your head and your elbow points straight downward.\n\nSTEP 3. Crunch your rib cage sideways toward your hip bone on the same side as the arm holding the pulley while keeping your hand in the same position relative to your head. Pause, then slowly straighten your back. Finish the repetitions on one side before doing the same on the other side.",
    "difficulty": "Intermediate",
    "id": 263,
    "image": "standing_oblique_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "standing oblique crunch",
    "target1": "abdominals",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While holding a barbell resting on the back of your shoulders, bend over at your waist.\n\nSTEP 2. Turn to one side by twisting your torso and head and shoulders.\n\nSTEP 3. Twist back to the starting position and repeat with the opposide side.",
    "difficulty": "Beginner",
    "id": 264,
    "image": "standing_torso_twist",
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
    "name": "standing torso twist",
    "target1": "abdominals",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Stand straight upright with your feet shoulder-width apart, holding a light dumbbell in your left hand.\n\nSTEP 2. Press the dumbbell over your head so that your left arm is straight - palm pointing out to the side. Reach your right arm across your face and cup your left elbow with your right hand - this will help keep your upper arm stable as you perform the exercise.\n\nSTEP 3. Without moving your upper arm, slowly bend your left elbow and lower the dumbbell behind your head as far as possible.\n\nSTEP 4. Extend the dumbbell back overhead until your left arm is straight and repeat for one set. Then place the dumbbell in your right hand and repeat the exercise with your right arm.",
    "difficulty": "Beginner",
    "id": 265,
    "image": "standing_triceps_extension",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "standing triceps extension",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Grab a barbell from behind you using an underhand grip while keeping your arms straight. Hang the barbell so that it rests on your extended fingers.\n\nSTEP 2. Flex your wrists to raise the barbell up as high as possible.\n\nSTEP 3. Reverse the movement to lower the barbell.",
    "difficulty": "Intermediate",
    "id": 266,
    "image": "standing_wrist_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "name": "standing wrist curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Standing so that your feet are shoulder-width apart, place your fingers behind your ears.\n\nSTEP 2. Touch your left elbow to your right knee as you bend and raise the knee while crunching your left armpit toward your right hip.\n\nSTEP 3. Return to starting position and repeat with the other side. Repeat the two sequences repeatedly.",
    "difficulty": "Beginner",
    "id": 267,
    "image": "steam_engine",
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
    "name": "steam engine",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Stand with your feet roughly twice shoulder-width apart and point your toes outward. With that stance, pick up a fairly heavy dumbbell and hold one end at arm's length with both hands firmly gripping to the inner portion of the upper weight, as shown.\n\nSTEP 2. Pull your shoulder blades back and lift your torso upward. Bend your knees and slowly lower until the top portion of your thigh is parallel to the floor.\n\nSTEP 3. Pause, and slowly return to the starting position while making sure that your knees are pointing in the same direction as your toes throughout the movement.",
    "difficulty": "Intermediate",
    "id": 268,
    "image": "sumo_squat",
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
    "name": "sumo squat",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {},
        "Obliques": {}
      }
    },
    "description": "This exercise helps develop core strength and both spinal strength and stability, as well as working the muscles that retract the shoulder blade retractors and the gluteals.\n\nSTEP 1. Kneel on all fours with your knees under your hips and hip-distance apart and put your hands on the floor a shoulder-width apart under your shoulders. Put your spine into the neutral position. Activate your core by drawing your abdominal muscles back toward your spine.\n\nSTEP 2. Without any sideways movement and keeping your abdomen pulled in, exhale and slowly raise an opposite arm and leg until they are parallel to the floor - be careful to follow the tempo you have set.\n\nSTEP 3. Inhale and slowly return your arm and leg to the starting position.\n\nSTEP 4. Repeat for the desired number of reps, then repeat the exercise using the other arm and leg.",
    "difficulty": "Intermediate",
    "id": 269,
    "image": "superman",
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
    "name": "superman",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Trapezius": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Lower Back": {}
      }
    },
    "description": "STEP 1. Grab a pair of dumbbells and lie face downward on a swiss-ball with your arms straight out and your palms facing inward.\n\nSTEP 2. Lift the dumbbells upward toward your chest, allowing your elbows to bend but keep them parallel and beside your side.\n\nSTEP 3. At the peak point, squeeze your shoulder blades together to get the maximum effect. Then lower your arms back to the starting position.",
    "difficulty": "Intermediate",
    "id": 270,
    "image": "swiss_ball_close_row",
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
    "name": "swiss-ball close row",
    "target1": "back",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your back on the ball with your feet flat on the floor. Lower your head as far as you can. Hold your hands behind your ears.\n\nSTEP 2. Use your abdominal muscles to pull your torso to a sitting position. Pause, then slowly lower yourself.",
    "difficulty": "Beginner",
    "id": 271,
    "image": "swiss_ball_crunch",
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
    "name": "swiss-ball crunch",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lay backward on a swiss-ball and center your back on it. Hold a pair of dumbbells in your arms and straighten them over your chest.\n\nSTEP 2. Bend your elbows, bringing the dumbbells down to the sides of your head.\n\nSTEP 3. Straighten your arms, raising the dumbbells back to the start position.",
    "difficulty": "intermediate",
    "id": 272,
    "image": "swiss_ball_french_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "swiss-ball french press",
    "target1": "arms",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Sit on a swiss-ball with a light dumbbell in each hand. Keep your legs together and feet flat on the floor. Your hands should be hanging down at your sides, with your palms facing back behind you.\n\nSTEP 2. Keeping your arms perfectly straight, slowly raise the weights out and up in front of you until your arms are parallel to the floor.\n\nSTEP 3. Hold for a second, then slowly lower the weights back down.",
    "difficulty": "Beginner",
    "id": 273,
    "image": "swiss_ball_front_raise",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "swiss-ball front raise",
    "target1": "shoulders",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "description": "STEP 1. While lying on your back, place your heels on a swiss-ball and ensure your legs are straight and extended, as illustrated. Keep your hands by your side.\n\nSTEP 2. Gradually raise your hips off of the floor so that a straight line forms from the tips of your feet to roughly your shoulders.\n\nSTEP 3. Lower back to starting position.",
    "difficulty": "Intermediate",
    "id": 274,
    "image": "swiss_ball_glute_bridge",
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
    "name": "swiss-ball glute bridge",
    "target1": "legs",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie facedown on a swiss-ball while holding a light dumbbell in each hand. Extend your legs straight out and place your toes on the floor - about a shoulder-width apart - to keep the ball steady.\n\nSTEP 2. Pull your elbows up so that your upper arms are in line with your back. Your arms should be at right angles, elbows pointing behind you with your knuckles pointing toward the floor - palms facing in.\n\nSTEP 3. Without moving your upper arms, slowly extend your arms out behind you until they are straight. Squeeze your triceps, then bend your elbows to lower the weights back down.",
    "difficulty": "Intermediate",
    "id": 275,
    "image": "swiss_ball_kickback",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "swiss-ball kickback",
    "target1": "arms",
    "type": "dumbbell swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Hamstrings": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. While lying on your back, place your lower legs on a Swiss ball. Then, put your hands flat on the floor next to your hips.\n\nSTEP 2. Push your hips up so that your body forms a straight line from your shoulders to your knees. Without pausing, pull your heels toward you and roll the ball as close as possible to your butt.\n\nSTEP 3. Pause, then roll the ball back until your body is in a straight line again.",
    "difficulty": "Advanced",
    "id": 276,
    "image": "swiss_ball_leg_curl",
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
    "name": "swiss-ball leg curl",
    "target1": "legs",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "description": "STEP 1. Lie down on your chest on a swiss-ball and place your hands at the side of your head. Keep your legs extended straight behind with a small bend at the knees if needed.\n\nSTEP 2. Raise your chest up off the ball and rotate your upper body to one side at the same time.\n\nSTEP 3. Return back to starting position, and rotate to the other side. Keep the ball stable and avoid having it move.",
    "difficulty": "Intermediate",
    "id": 277,
    "image": "swiss_ball_oblique_back_extension",
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
    "name": "swiss-ball oblique back extension",
    "target1": "back",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie sideways on the ball, ensuring that you keep your legs straight. Brace your feet against a wall for support and hold your hands behind your ears.\n\nSTEP 2. Lift your shoulder and crunch sideways toward your hip. Hold for a second before releasing. Try not to twist your body.",
    "difficulty": "Intermediate",
    "id": 278,
    "image": "swiss_ball_oblique_crunch",
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
    "name": "swiss-ball oblique crunch",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Kneel on the floor in front of a swiss-ball and slide forward so that you are lying over the ball with the ball situated just under your thighs. Contract your abdominals so that your back remains straight. Slowly walk forward with your hands until your feet are resting on the ball. Slowly raise your butt toward the ceiling as the ball moves toward your hands and maintain the position.\n\nSTEP 2. Slowly bend your elbows to lower yourself toward the floor.\n\nSTEP 3. Push back up to the start position.",
    "difficulty": "Beginner",
    "id": 279,
    "image": "swiss_ball_pike_pushup",
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
    "name": "swiss-ball pike pushup",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Place a pair of dumbbells on the floor in front of a ball. Kneel directly behind the ball, and drape your arms over it to grab the dumbbells in an underhand grip. Let our weight move back toward your heels as you brace your triceps on the ball, forearms down.\n\nSTEP 2. Keep your back straight as you curl the weights up until your forearms are just short of perpendicular to the floor.",
    "difficulty": "Intermediate",
    "id": 280,
    "image": "swiss_ball_preacher_curl",
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
    "name": "swiss-ball preacher curl",
    "target1": "arms",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Grab a pair of dumbbells and lie down so that your head, neck, and shoulder blades are in contact with the swiss ball. Your lower back should not be contacting it though.\n\nSTEP 2. With your feet shoulder-width apart, push to lift your hips until they are parallel to the floor and your knees are bent at right angles. Then press the weights up over your chest as in a normal bench press.",
    "difficulty": "Intermediate",
    "id": 281,
    "image": "swiss_ball_press",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "swiss-ball press",
    "target1": "chest",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie on a swiss-ball with your knees bent and feet flat on the floor. The only things touching the ball should be your head, shoulders and neck - your lower back should be off of the ball. Push your hips up so that your torso and thighs form a straight line - parallel to the floor - with your legs bent at right angles.\n\nSTEP 2. Grab a dumbbell and wrap your thumbs and forefingers around the end of the weight, then press it up above your chest with both hands. Your palms should be flat against the inside plate of the dumbbell.\n\nSTEP 3. With your elbows slightly bent, slowly sweep the weight back behind your head as far as is comfortable - your upper arms should end up alongside your ears.\n\nSTEP 4. Reverse the motion by sweeping your arms forward - keeping them fixed as you go - until the weight is back over your chest.",
    "difficulty": "Intermediate",
    "id": 282,
    "image": "swiss_ball_pullover",
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
    "name": "swiss-ball pullover",
    "target1": "chest",
    "target2": "back",
    "type": "dumbbell swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "description": "STEP 1. Place yourself in standard pushup position - but to make it harder, place your shins and feet on the ball. Remember to support your body with the balls of your feet and your hands, and keep the latter shoulder-width apart, palms flat on the floor.\n\nSTEP 2. Lower your torso until your chest is just a fraction of an inch off the floor. Push yourself back to starting position.",
    "difficulty": "Intermediate",
    "id": 283,
    "image": "swiss_ball_pushup",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 1
      }
    ],
    "name": "swiss-ball pushup",
    "target1": "chest",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back on a swiss ball with knees bent, fet off the floor, and hands reaching overhead holding onto a bench for support.\n\nSTEP 2. Keeping your head and neck relaxed, use your lower-abdominal muscles to raise your hips off the ball and toward your rib cage.\n\nSTEP 3. Slowly lower your hips back to the starting position. As they lightly touch the ball, repeat.",
    "difficulty": "Intermediate",
    "id": 284,
    "image": "swiss_ball_reverse_crunch",
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
    "name": "swiss-ball reverse crunch",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Brachialis": {}
      }
    },
    "description": "STEP 1. While sitting upright on a swiss-ball, grab hold of a pair of dumbbells so that your arms are fully extended by your side. The palms of your hands should be facing outward, as illustrated..\n\nSTEP 2. Gradually curl your arms at the elbow, raising the dumbbells to shoulder level while not changing the position of your arms. The arm should simply bend at the elbow without moving in any other direction. Do not turn your wrists as you are raising the dumbbells.",
    "difficulty": "Intermediate",
    "id": 285,
    "image": "swiss_ball_seated_curl",
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
    "name": "swiss-ball seated curl",
    "target1": "arms",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Lie your stomach on a swiss ball and roll forward until your arms hang straight down and your hands are flat on the floor. They should be shoulder-width apart, and your pelvis should be at the top of the ball. Keep your legs straight and point your feet upward.\n\nSTEP 2. Complete the pushup while in this position.",
    "difficulty": "Intermediate",
    "id": 286,
    "image": "swiss_ball_shoulder_press",
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
    "name": "swiss-ball shoulder press",
    "target1": "shoulders",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "deltoids": {}
      }
    },
    "description": "Throughout this exercise, do not roll your shoulders - this will only strain your neck muscles. Additionally, do not bend at the elbows as you lift the weight - your biceps will end up doing the work, not your deltoids. \n\nSTEP 1. Sit on a swiss-ball with your knees bent and feet flat on the floor, while holding a heavy dumbbell in both hands.\n\nSTEP 2. Slowly lift your shoulders up as high as you can - keeping your arms straight as you go - while keeping your back straight.\n\nSTEP 3. Pause for 1-2 seconds, then slowly lower your shoulders down as far as possible.",
    "difficulty": "Intermediate",
    "id": 287,
    "image": "swiss_ball_shrug",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "swiss-ball shrug",
    "target1": "shoulders",
    "type": "dumbbell swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Quadriceps": {},
        "Soleus": {}
      }
    },
    "description": "STEP 1. Standing upright, place one foot on a ball behind you while holding a pair of dumbbells by your sides. Keep your arms straight, as illustrated.\n\nSTEP 2. Drop downward toward the floor, bending at your hips and knees and leaning your torso forward.\n\nSTEP 3. Return to the starting position by pushing off of your front foot.\n\nSTEP 4. Repeat with the other leg.",
    "difficulty": "Intermediate",
    "id": 288,
    "image": "swiss_ball_split_squat",
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
    "name": "swiss-ball split squat",
    "target1": "legs",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on a swiss-ball so that your back is centered on the ball. Hold one dumbbell with both hands and extend them over your chest, as illustrated.\n\nSTEP 2. While keeping your arm extended straight at all times, rotate your body to one side.\n\nSTEP 3. Rotate back to starting position and then to the other side and back.",
    "difficulty": "Intermediate",
    "id": 289,
    "image": "swiss_ball_torso_twist",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "swiss-ball torso twist",
    "target1": "abdominals",
    "type": "swissball dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Sit upright on a swiss-ball and place your hands on your hips.\n\nSTEP 2. While keeping your feet flat, lean to one side as far as possible without tipping, and rotate in a big circle.\n\nSTEP 3. After one full rotation, change direction and rotate the other way.",
    "difficulty": "Beginner",
    "id": 290,
    "image": "swiss_ball_trunk_rotation",
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
    "name": "swiss-ball trunk rotation",
    "target1": "abdominals",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Stand leaning against a wall with your feet slightly wider than shoulder-width part. Place a swiss ball between you and the wall, as illustrated. The ball should press against your middle or lower back in the up position, and against your upper back in the down position.\n\nSTEP 2. Bend your knees and let your back slide down the wall along the swiss ball until your upper thighs are parallel to the floor. Pause, then push yourself back up.",
    "difficulty": "Intermediate",
    "id": 291,
    "image": "swiss_ball_wall_squat",
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
    "name": "swiss-ball wall squat",
    "target1": "legs",
    "type": "swissball"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Latissimus Dorsi": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Straddle a T-bar - row machine and grab the handles with an overhand grip. Make sure you are standing with your feet shoulder-width apart and your knees slightly bent, as shown.\n\nSTEP 2. Keep your back flat and bend your waist until your upper body is about 45 degrees from the vertical, the bar hanging at arm's length directly below your shoulders.\n\nSTEP 3. Then, squeezing your shoulder blades together , lift the bar as close as you can to your lower chest. Pause, then slowly lower the bar back to the starting position.",
    "difficulty": "Advanced",
    "id": 292,
    "image": "t_bar_bent_over_row",
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
    "name": "t-bar bent-over row",
    "target1": "back",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Place a pair of dumbbells at the spot where you position your hands for a standard pushup - slightly wider than shoulder-width apart. Grasp the dumbbell handles and set yourself up in pushup position with feet hip-width apart.\n\nSTEP 2. Lower our body to the floor.\n\nSTEP 3. As you push yourself back up, rotate the right side of your body upward as you bend your right arm and pull the right dumbbell to your torso. Then straighten your arm so that the dumbbell is above your shoulder. Your arms should form a T with your body.\n\nSTEP 3. Lower the dumbbell bak down, and repeat, this time perfuming the move to your left. Raise the dumbbell and rotate your body in one fluid motion.\n\nSTEP 5. Repeat.",
    "difficulty": "Expert",
    "id": 293,
    "image": "t_pushup",
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
    "name": "t-pushup",
    "target1": "legs",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. While lying on your back, extend our legs and arms toward the ceiling.\n\nSTEP 2. Slowly lift your head and shoulders. As you curl upward, attempt to reach as high as possible with your fingers.\n\nSTEP 3. Hold. Then return to the starting position.",
    "difficulty": "Beginner",
    "id": 294,
    "image": "toe_touch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 14
      }
    ],
    "name": "toe touch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Assume the standard pushup position on a smooth floor - something tiled or hardwood. Place a small, thick towel under each hand.\n\nSTEP 2. Keep your elbows slightly bent as you move your arms up and out to your sides atop the sliding towels so your hands are in line with your ears. Then use your chest to move the towels back in, simulating a dumbbell fly.",
    "difficulty": "Advanced",
    "id": 295,
    "image": "towel_fly_no_weight",
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
    "name": "towel fly (no weights)",
    "target1": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie with your knees bent and your feet flat on the floor. Fold your arms across your chest or hold your hands behind your ears (Do not interlock your fingers behind your head).\n\nSTEP 2. Use your abs to lift your head and upper torso while keeping your lower back pressed firmly against the floor.\n\nSTEP 3. Pause with your shoulder blades a couple of inches off the floor, then slowly return to the starting position using a controlled movement.",
    "difficulty": "Beginner",
    "id": 296,
    "image": "traditional_crunch",
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
    "name": "traditional crunch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Pectoralis": {}
      }
    },
    "description": "This triceps exercise can require considerable strength when the assist is not used. It also works the pectoral muscles of the chest to some degree.\n\nSTEP 1. Place a hand on each handle, keeping your hands in line with your elbows and shoulders. Slowly place first one and then the other knee onto the kneepad.\n\nSTEP 2. Lower your body weight gently onto the kneepad, keeping your shoulder, elbows, hips, and knees in line.\n\nSTEP 3. Inhale as the kneepad lowers and push your elbows out behind you. Lower yourself down to a comfortable position, but aim to have an angle at 90 degrees at each elbow. \n\nSTEP 4. When you have reached the position, exhale and slowly push yourself back up the start position.",
    "difficulty": "Intermediate",
    "id": 297,
    "image": "triceps_assisted_dip",
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
    "name": "triceps assisted dip",
    "target1": "arms",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Triceps Brachii": {}
      }
    },
    "description": "This exercise is an excellent one for developing triceps, but it is vital that you use the correct technique. Correct body position is especially important.\n\nSTEP 1. Take a dumbbell in one hand, then place your opposite knee on a bench, together with your other hand, and place your other foot on the floor, flexing it slightly at the knee. Then pull the arm holding the dumbbell straight back and up to your side, making it parallel to the floor - keep your back straight.\n\nSTEP 2. Holding the dumbbell so that you have a 90 degree angle at your elbow, exhale slowly and extend your arm as far as it will go, or until your wrist, elbow, and shoulder are in line.\n\nSTEP 3. Inhale and lower the dumbbell slowly, but only until you reach an angle of 90 degrees at your elbow. Repeat for the required number of reps.\n\nSTEP 4. Repeat holding the dumbbell in the other hand.",
    "difficulty": "Intermediate",
    "id": 298,
    "image": "triceps_kickback",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 4
      }
    ],
    "name": "triceps kickback",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie down on your back with feet flat on the floor and knees bent. Place your fingers lightly behind your head.\n\nSTEP 2. Begin to gradually curl your right shoulder toward your left knee until your right shoulder blade raises above the floor. Hold for 3-5 seconds while actively crunching your abdominal muscles.\n\nSTEP 3. Slowly, return to starting position and repeat with the opposite side of the body.",
    "difficulty": "Beginner",
    "id": 299,
    "image": "twisting_crunch",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "twisting crunch",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back with your legs projecting straight upward and your hands by your sides.\n\nSTEP 2. Push upward with your feet by raising your hips off the floor and simultaneously, twisting them to one side.\n\nSTEP 3. Lower your hips back to the ground and repeat the motion but twist to the opposing side.",
    "difficulty": "Beginner",
    "id": 300,
    "image": "twisting_hip_raise",
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
    "name": "twisting hip raise",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. Hold a pair of dumbbells slightly greater than shoulder-width apart at the level of your jaw. Palms should be facing in towards your body.\n\nSTEP 2. Press the dumbbells overhead as you twist your torso to the left.\n\nSTEP 3. Lower the dumbbells as you twist back to the center, then press upward again while twisting to the right. Repeat.",
    "difficulty": "Beginner",
    "id": 301,
    "image": "twisting_shoulder_press",
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
    "name": "twisting shoulder press",
    "target1": "shoulders",
    "target2": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While lying on your back, extend your arms out to the sides at shoulder height. Raise your legs until they are perpendicular to the floor.\n\nSTEP 2. Gradually lower your legs to one side of your body so you meet the floor a few inches away from your hand.\n\nSTEP 3. Pause, then bring your feet back to the center. Repeat, but bend your legs to the other side.",
    "difficulty": "Beginner",
    "id": 302,
    "image": "twisting_windmill",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 9
      }
    ],
    "name": "twisting windmill",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Hamstrings": {}
      }
    },
    "description": "STEP 1. Get into standard pushup position. Lift your right hand and extend it forward, while simultaneously lifting your left foot off of the floor, as shown. Hold for 5 seconds.\n\nSTEP 2. Alternate the movement with your left hand and right foot.\n\nSTEP 3. Repeat.",
    "difficulty": "Beginner",
    "id": 303,
    "image": "two_point_bridge",
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
    "name": "two-point bridge",
    "target1": "arms",
    "target2": "chest",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "description": "STEP 1. Attach a stirrup handle to the high pully and stand sideways to the weight stack, as illustrated. Grab hold of the handle with your inside hand. Stand a couple steps from the stack of weights to ensure that you tart with tension in the cable. Pull your shoulders back, and place your free hand on your hip. Keep a slight bend in your working elbow.\n\nSTEP 2. Bring the cable handle down and across your body in a wide, arcing motion without changing the angle of your elbow.\n\nSTEP 3. Stop before your working shoulder pulls forward (try to keep your shoulders in the same position), pause, then slowly return to the starting position. Reepat and turn around to work the other arm.",
    "difficulty": "Intermediate",
    "id": 304,
    "image": "unilateral_high_cable_fly",
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
    "name": "unilateral high cable fly",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "description": "STEP 1. Attach a stirrup handle to the low pully and stand sideways to the weight stack, as illustrated. Grab hold of the handle with your inside hand. Stand a couple steps from the stack of weights to ensure that you start with tension in the cable. Pull your shoulders back, and place your free hand on your hip. Keep a slight bend in your working elbow.\n\nSTEP 2. Without increasing the bend in your elbow, bring the handle up and across your body in a wide arc until your working hand is in front of the opposite cheek.\n\nSTEP 3. Lower to the starting position. Repeat. Face the other side to work th other arm.",
    "difficulty": "Advanced",
    "id": 305,
    "image": "unilateral_low_cable_fly",
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
    "name": "unilateral low cable fly",
    "target1": "chest",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Deltoids": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Biceps Brachii": {},
        "Trapezius": {}
      }
    },
    "description": "STEP 1. For this exercise, it is best to use an EZ-cur bar, attached to the low cable. Stand roughly 30 cm or a foot in front of the device.\n\nSTEP 2. Grab the bar with an overhand, shoulder-width grip, and hold it at an arm's length in front of your thighs.\n\nSTEP 3. Pull the bar upward until your upper arms are parallel to the floor. Do not extend past this mark. Pause at this point, then gradually lower the bar back to the starting position.",
    "difficulty": "Intermediate",
    "id": 306,
    "image": "upright_row",
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
    "name": "upright row",
    "target1": "shoulders",
    "type": "machine"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. With your back on the floor, and your legs straight, hold your arms straight above your chest, and have your fingers point upwards.\n\nSTEP 2. Fold your body upward by lifting your legs off the floor and stretching your arms toward your toes, while consciously contracting your abdominal muscles.\n\nSTEP 3. Then, pause for a short time, and return to starting position.",
    "difficulty": "Intermediate",
    "id": 307,
    "image": "v_up",
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
    "name": "v-up",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {}
      }
    },
    "description": "STEP 1. Stand straight with your feet about 6 inches apart and dumbbell in each hand.\n\nSTEP 2. Your arms should hang straight down from your sides, palms facing in.\n\nSTEP 3. Take a big step forward with your left foot and lower your body until your left thigh is almost parallel to the floor. Your right leg should be extended behind you with only the ball of your right foot on the floor.\n\nSTEP 3. Put all your weight on this leading leg, stand back up, bringing your back leg forward so you have traveled one full stride.\n\nSTEP 4. Keep lunging forward - alternating between your left and right legs - across the room.",
    "difficulty": "Intermediate",
    "id": 308,
    "image": "walking_lunge",
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
    "name": "walking dumbbell lunge",
    "target1": "legs",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Quadriceps": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Glutes": {},
        "Obliques": {}
      }
    },
    "description": "STEP 1. Hold a 10-25 pound plate out in front of you, and stand with your feet hip-width apart, as illustrated. The weight plate should be positioned in front of your chest with your elbows slightly bent.\n\nSTEP 2. With your right leg, lunge forward about 3 feet until your right thigh is parallel to the floor and your left knee is nearly touching the floor. At the same time, twist your upper body roughly 90 degrees to the right.\n\nSTEP 3. Twist and step back to the start position, then repeat, stepping with the left leg and twisting to the left. As you do the exercise, you will be \"walking\" across the floor, so make sure you have a clear path in front of you.",
    "difficulty": "Intermediate",
    "id": 309,
    "image": "walking_lunge_twist",
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
    "name": "walking lunge twist",
    "target1": "legs",
    "target2": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "lower back": {}
      }
    },
    "description": "STEP 1. Stand straight with our feet shoulder-width apart and hold a light dumbbell with both hands around the handle as illustrated. Twisting to the right, turn to your right and raise your arms overhead so that the weight is directly over your right shoulder - your left heel should rise off the floor as you pivot.\n\nSTEP 2. Starting from this position, squat down and rotate your torso to your left as you simultaneously \"chop\" the dumbbell across and down to your left.\n\nSTEP 3. When the weight reaches the outside of your left ankle, reverse the motion and return to the starting position where the weight is above your right shoulder. After the set is finished, switch positions so that you are twisting to your right - starting with the dumbbell over your left shoulder - and twist down to the right.",
    "difficulty": "Intermediate",
    "id": 310,
    "image": "weighted_chop",
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
    "name": "weighted chop",
    "target1": "abdominals",
    "target2": "back",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. While holding a dumbbell on your chest, lie on the floor with your knees bent.\n\nSTEP 2. Flex your waist to raise your upper torso from the ground. Keep your lower back on the floor as you raise your torso up as high as possible.\n\nSTEP 3. Return back to starting position. Repeat.",
    "difficulty": "Beginner",
    "id": 311,
    "image": "weighted_crunch",
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
    "name": "weighted crunch",
    "target1": "abdominals",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Pectoralis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Deltoids": {},
        "Triceps Brachii": {}
      }
    },
    "description": "STEP 1. Go into the standard pushup position, with hands beneath your shoulders. This time though, ask a partner to place a weight plate on your back, between your shoulder blades.\n\nSTEP 2. Keep your body straight as you lower yourself by bending your elbows until your chest touches the floor.\n\nSTEP 3. Pause, then push yourself up.",
    "difficulty": "Advanced",
    "id": 312,
    "image": "weighted_pushup",
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
    "name": "weighted pushup",
    "target1": "chest",
    "type": "dumbbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Lie on your back on a swiss ball, holding a weight plate across your chest.\n\nSTEP 2. Raise your head and shoulders and crunch your rib cage toward your pelvis.\n\nSTEP 3. Pause, then slowly return to the starting position.",
    "difficulty": "Intermediate",
    "id": 313,
    "image": "weighted_swiss_ball_crunch",
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
    "name": "weighted swiss-ball crunch",
    "target1": "abdominals",
    "type": "swissball other"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Place your knees on the floor, hands resting on an ab wheel directly below your chest, back flat, abs tight, neck and head aligned with your back.\n\nSTEP 2. Roll your hands as far forward as possible, keeping your core tight. Stop the movement as soon as you realize you can't go any farther while still keeping the neutral arch in your back.\n\nSTEP 3. Roll your hands back to the starting position.",
    "difficulty": "Beginner",
    "id": 314,
    "image": "wheel_rollout",
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
    "name": "wheel rollout",
    "target1": "abdominals",
    "type": "other"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Using an underhand grip, take hold of the barbell with your hands a few inches apart. Sit on the end of a bench, keep your back flat while resting your forearms on it but making sure that your wrist and hand hang off the end.\n\nSTEP 2. Allow your wrists to bend back and the barbell to roll to the ends of your fingers. Close your fingertips as you curl your palms toward your biceps.\n\nSTEP 3. Pause, reverse the motion, and let the bar roll back to your fingertips.",
    "difficulty": "Beginner",
    "id": 315,
    "image": "wrist_curl",
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 6
      }
    ],
    "name": "wrist curl",
    "target1": "arms",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Lower Back": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Hamstrings": {},
        "Quadriceps": {}
      }
    },
    "description": "STEP 1. Setup a bar on a rack so that it is just below your chest level. Approach the bar and place it in between your arms as illustrated and step back. Use cushioning as needed to reduce the irritation of the bar on skin.\n\nSTEP 2. Set your feet shoulder-width apart, and keep your knees slightly bent but your back straight as you slowly lower your body until your thighs are parallel to the floor.\n\nSTEP 3. Pause, then straighten back up into the starting position.",
    "difficulty": "Advanced",
    "id": 316,
    "image": "zercher_squat",
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
    "name": "zercher squat",
    "target1": "back",
    "type": "barbell"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Biceps Brachii": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Wrist Extensors": {},
        "Wrist Flexors": {}
      }
    },
    "description": "STEP 1. Sit on the edge of a bench and grab a pair of dumbbells. Begin by dropping your arms downward with your palms facing forward.\n\nSTEP 2. Curl your arms up toward your chest so that your palms now face inward. .\n\nSTEP 3. At the peak of the curling motion, rotate your wrists so that your palms are facing out again.\n\nSTEP 3. Gradually lower the weights, and once your arms are at their lowest point, rotate your wrists once more to return to starting position.",
    "difficulty": "Intermediate",
    "id": 317,
    "image": "zottman_curl",
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
    "name": "zottman curl",
    "target1": "arms",
    "type": "dumbbell"
  },
  {
    "description": "Exercise bikes and treadmills are both great for getting in shape. Generally speaking though, a workout on a treadmill can burn more calories and because you are usually moving your arms, you'll get more of an overall aerobic workout.\n\nSince exercise bikes are usually more fun than treadmills though, you are much more likely to stick with it in the long-term. This means that even though you can burn more calories on a treadmill, you are also more likely to stop using it altogether.\n\nYou might also find it difficult to use it long enough per workout session to get the full benefits. Most people find it easier to workout for 20 minutes on an exercise bike than 20 minutes on a treadmill. You have to think about that. If you are likely to only do 10 minutes on a treadmill but can easily do 20 minutes on an exercise bike, you will burn more calories per session on an exercise bike.",
    "difficulty": "Beginner",
    "id": 318,
    "image": "cycling",
    "muscles": [],
    "name": "cycling",
    "target1": "cardio"
  },
  {
    "description": "When you compare treadmills to elliptical trainers, you can't help but notice how impact free the elliptical trainer appears to be. With the elliptical, there is no impact on the ground, so the joints in your lower body are free from any abuse. Although the treadmill mat is better for your knees than cement, there is still a significant amount of impact on your joints.\n\nOne obvious point that is in favor of treadmills is that it provides a better training experience for a dedicated runner/jogger than an elliptical trainer. That being said, if you are looking for a quality cardiovascular workout with the maximum amount of efficiency, you will not be able to overlook the elliptical machine. Most elliptical trainers give you a total body workout if you have dual action handlebars for your arms and foot pedals for your legs, whereas treadmills focus more on your lower body as they simulate the jogging experience. What is even more interesting, according to recent studies, is that the lack of impact on the joints allows the user to burn roughly the same amount of calories as treadmills with the impression of putting less effort.\n\nTherefore, it is no wonder that ellipticals have been the machine of choice for elder exercisers with knee problems, as well as physical trainers who are involved in rehabilitating their clients.",
    "difficulty": "Beginner",
    "id": 319,
    "image": "elliptical",
    "muscles": [],
    "name": "elliptical",
    "target1": "cardio"
  },
  {
    "description": "The best way to start jogging is, as you both have done, to gradually build up your fitness over time through power walking. Once you feel your fitness has improved you can then start to introduce short sections of jogging.\n\nSelect a route which you can safely walk/jog around for at least 20 mins. It is a good idea if there are lampposts or something similar, to help you to be able to split the route up into segments of approximately 2-3 lampposts in length. The idea is to walk for one segment and slowly jog the next. Initially you might find that you can only jog 3 segments throughout your whole route, but by slowly increasing the number of jogging segments over the next few weeks, you will find the jogging segments become easier. Use the same route for the first four weeks so that you can visibly see the improvement. Before you know it you will both be jogging around your whole route.\n\nJogging burns more calories than walking as you consume more oxygen per mile you run than walking in addition to the impact factor. Circulation increases briefly as does the heart beat. Once you get seasoned enough, you begin to see benefits of jogging. You won\u2019t find sudden thumping of your heart which gets increased and vital oxygen. Jogging tones muscles too. Perhaps it is the best exercise for overweight people. Because of the impact they can burn more calories from hips, thighs and abdominal area. Rotating the torso as you run gives a smoother stride in addition to strengthening waist muscle.",
    "difficulty": "Beginner",
    "id": 320,
    "image": "jogging",
    "muscles": [],
    "name": "jogging",
    "target1": "cardio"
  },
  {
    "description": "Jumping rope is a great cardiovascular exercise. It's one of the foundations of a boxer's conditioning program, and you've got to be in shape to box.\n\nRemember to wear supportive shoes while skipping rope. Running shoes won't give you enough forefoot support and are not intended for bouncing on the balls of your feet. Avoid jumping on concrete, floors laid over concrete, and other hard surfaces like tile. If you don't have a springy wooden or carpeted floor, place a thin exercise mat on whatever surface you do have and jump on that.\n\nJumping rope is strenuous and may be hard to sustain for the 30 minutes that you need for a good aerobic workout. Try this routine, used in many boxing classes:\n\nSkip rope for three minutes, take a minute off and do as many crunches as you can. Then, skip rope for another three minutes, and use the break to do as many pushups as you are able. Finally, go back to skipping for three minutes and finish off with doing crunches once more. Repeat.",
    "difficulty": "Beginner",
    "id": 321,
    "image": "jump_rope",
    "muscles": [],
    "name": "jump rope",
    "target1": "cardio"
  },
  {
    "description": "Rowing machine training is a great all round exercise routine. Of course it is not the same as rowing on the water but for many it offers an excellent and safe way to keep fit.\n\nRowing uses all your muscles with very little impact on your joints making it suitable for all ages. Strenuous rowing uses more calories an hour and with less risk of injury than other sports. However, you still need to learn and practice correct rowing technique before starting a vigorous hourly workout.\n\nTraining with a rowing machine is also an excellent activity to strengthen your arms, back, shoulder, abdomen and leg muscles \u2013 pretty much the lot really! But the benefits can only be gained if you focus on correct technique as over tightening your back will strain both your lower back and knees.",
    "difficulty": "Beginner",
    "id": 322,
    "image": "rowing",
    "muscles": [],
    "name": "rowing",
    "target1": "cardio"
  },
  {
    "description": "For a gym owner, a step machine makes an excellent choice for a number of reasons. They offer an excellent low-impact workout which focuses on your glutes, hamstrings and calf muscles. This makes them particularly popular with women, who are often highly focused on toning their butt and legs.\n\nUsing them is easy - stepping is an intuitive motion - though care needs to be taken to get the action right. Try to follow the following guidelines:\n\nStand up straight, rather than bending forward. If they need to hold the handrails, use them to stabilize, rather than for support.\n\nClimb in the middle of the machine's range, and avoid letting the steps touch the floor or come to a stop at the top.\n\nTake deep full steps to engage the large muscle groups (quadriceps and hamstrings). Rapid, shallow steps are not nearly as effective.",
    "difficulty": "Beginner",
    "id": 323,
    "image": "step_machine",
    "muscles": [],
    "name": "step machine",
    "target1": "cardio"
  },
  {
    "description": "Swimming is an excellent form of exercise. Because the density of the human body is very similar to that of water, the water supports the body and less stress is therefore placed on joints and bones. Swimming is frequently used as an exercise in rehabilitation after injuries or for those with disabilities.\n\nResistance swimming is one form of swimming exercise. It is done either for training purposes, to hold the swimmer in place for stroke analysis, or to enable swimming in a confined space for athletic or therapeutic reasons. Resistance swimming can be done either against a stream of moving water (often termed a swimming machine) or by holding the swimmer stationary with elastic attachments.\n\nSwimming is primarily an aerobic exercise due to the long exercise time, requiring a constant oxygen supply to the muscles, except for short sprints where the muscles work anaerobically. As with most aerobic exercise swimming is believed to reduce the harmful effects of stress. Swimming can improve posture and develop a strong lean physique, often called a \"swimmer's build.\"\n\nSource: Wikipedia",
    "difficulty": "Beginner",
    "id": 324,
    "image": "swimming",
    "muscles": [],
    "name": "swimming",
    "target1": "cardio"
  },
  {
    "description": "Running or walking on a treadmill can be an effective way to work out, like other complex cardiovascular exercises. As with all exercise, regular treadmill use increases endurance.\n\nTreadmills offer the benefit of reduced impact since all treadmills offer some sort of shock absorption. Exercising on a treadmill can reduce the strain to the ankles, knees and lower back of users.\n\nLack of wind resistance makes running on a treadmill easier than running outdoors - even at the same elevation. Wind resistance is thought to increase the workload by 2-3%. This problem is very easily overcome by elevating your treadmill to 1% or level 1. The slight incline will make your treadmill workout more equal to running outside on level ground.\n\nIncreasing the incline actually requires more muscle activation than running on a level terrain. You build more than just your leg muscles - your core stabilizer muscles also get worked out. An increase in incline also results in improved bone density, increased cardiovascular fitness, and stamina.",
    "difficulty": "Beginner",
    "id": 325,
    "image": "treadmill",
    "muscles": [],
    "name": "treadmill",
    "target1": "cardio"
  },
  {
    "description": "Playing tennis is a good sport to maintain your health, fitness, strength and agility. It has been calculated that a good hour-long game of singles tennis burns around 600 calories for men and 420 calories for women. In addition to the fitness and physical health benefits, tennis also provides numerous social and mental health benefits as well.\n\nTennis can be a great workout and lots of fun. The numerous health benefits of tennis include increased aerobic capacity, lowering of resting heart rate and pressure, improved metabolic function, bone density and muscle tone! It is no wonder that tennis is considered the sport \"for all ages\".",
    "difficulty": "Beginner",
    "id": 326,
    "image": "tennis",
    "muscles": [],
    "name": "tennis",
    "target1": "cardio"
  },
  {
    "id": 327,
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
    "muscles": [
      {
        "is_primary": 1,
        "muscle_id": 12
      }
    ],
    "name": "machine rear delt"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. This exercise makes the traditional plank more difficult to perform. Get into the traditional plank position, but place both your feet on a bench, as illustrated.\n\nSTEP 2. Brace your core by contracting your abdominal muscles in this position. Hold for roughly 30 seconds, then release.",
    "difficulty": "Beginner",
    "id": 335,
    "image": "elevated_feet_plank",
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
    "name": "elevated-feet plank",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. This exercise makes the traditional plank easier to perform, since you do not have to support as much body weight. Pretend you are about to do pushups off of a bench, but place your forearms on the bench instead. Your elbows should be placed so that your arms and torso form a 90-degree angle between one another.\n\nSTEP 2. Brace your core by contracting your abdominal muscles in this position. Hold for roughly 30 seconds, then release.",
    "difficulty": "Beginner",
    "id": 336,
    "image": "inclined_plank",
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
    "name": "incline plank",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Start to get into a pushup position, but bend your elbows and rest your weight on your forearms instead of on your hands. Then, bend your knees so that they help support your body - this makes performing the traditional plank exercise easier to perform. Your body should form a straight line from your shoulders to your knees.\n\nSTEP 2. Brace your core by contracting your abdominal muscles in this position. Hold for roughly 30 seconds, then release.",
    "difficulty": "Beginner",
    "id": 337,
    "image": "kneeling_plank",
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
    "name": "kneeling plank",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "description": "STEP 1. Begin by getting into pushup position, but bend your elbows and rest your weight on your forearms instead of using your hands as illustrated. Your body should form a straight line from your shoulders down to your ankles.\n\nSTEP 2. Brace your core by contracting your abdominal muscles in this position. Hold for roughly 30 seconds, then release.",
    "difficulty": "Beginner",
    "id": 338,
    "image": "plank",
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
    "name": "plank",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "MajorMuscles": {
      "Muscle": {
        "Obliques": {}
      }
    },
    "SecondaryMuscles": {
      "Muscle": {
        "Rectus Abdominis": {}
      }
    },
    "description": "STEP 1. Lie on your left side with your knees straight and prop your upper body up on your left elbow and forearm, as illustrated.\n\nSTEP 2. Brace your core by contracting your abs forcefully. Then, slowly raise your hips until your body form a straight line from your ankles down to your shoulders.\n\nSTEP 3. Hold for 30 seconds or so, then turn to your right side and repeat.",
    "difficulty": "Beginner",
    "id": 339,
    "image": "side_plank",
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
    "name": "side plank",
    "target1": "abdominals",
    "type": "none"
  },
  {
    "id": 340,
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
