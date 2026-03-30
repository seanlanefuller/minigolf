// =====================
// Hole definitions
// =====================
const holes = [
    {
        name: "Hole 1",
        start: { x: 70, y: 330 },
        boundaries: [
            { x: 50, y: 350 },
            { x: 550, y: 350 },
            { x: 550, y: 50 },
            { x: 50, y: 50 }
        ],
        hole: { x: 520, y: 80, radius: 15 },
        obstacles: [
            { type: "wall", x1: 200, y1: 300, x2: 400, y2: 300 },
            { type: "windmill", x: 350, y: 160, radius: 22, speed: 0.05, angle: 0 }
        ]
    },

    {
        name: "Hole 2",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 3",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 4",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 5",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 6",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 7",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },

    {
        name: "Hole 8",
        start: { x: 90, y: 330 },
        boundaries: [
            { x: 70, y: 350 },
            { x: 530, y: 350 },
            { x: 530, y: 120 },
            { x: 300, y: 120 },
            { x: 300, y: 200 },
            { x: 70, y: 200 }
        ],
        hole: { x: 500, y: 140, radius: 15 },
        obstacles: [
            { type: "windmill", x: 360, y: 180, radius: 20, speed: 0.08, angle: 0 },
            { type: "windmill", x: 260, y: 160, radius: 16, speed: -0.06, angle: 0 }
        ]
    },
    // 👉 add more holes up to 18
];
