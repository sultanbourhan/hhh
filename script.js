document.addEventListener("DOMContentLoaded", function () {
    const solarSystem = document.querySelector("#solar-system");

    // إنشاء الشمس
    const sun = document.createElement("a-sphere");
    sun.setAttribute("color", "yellow");
    sun.setAttribute("radius", "1.5");
    sun.setAttribute("position", "0 1 0");
    solarSystem.appendChild(sun);

    // إنشاء الكواكب
    const planets = [
        { name: "Mercury", color: "gray", radius: 0.2, distance: 2 },
        { name: "Venus", color: "orange", radius: 0.4, distance: 3 },
        { name: "Earth", color: "blue", radius: 0.5, distance: 4 },
        { name: "Mars", color: "red", radius: 0.3, distance: 5 },
        { name: "Jupiter", color: "brown", radius: 1, distance: 6 },
        { name: "Saturn", color: "gold", radius: 0.8, distance: 7 },
        { name: "Uranus", color: "lightblue", radius: 0.6, distance: 8 },
        { name: "Neptune", color: "darkblue", radius: 0.6, distance: 9 }
    ];

    planets.forEach((planet, index) => {
        const planetEntity = document.createElement("a-sphere");
        planetEntity.setAttribute("color", planet.color);
        planetEntity.setAttribute("radius", planet.radius);
        planetEntity.setAttribute("position", `${planet.distance} 1 0`);
        solarSystem.appendChild(planetEntity);

        // إضافة حركة الدوران
        const animation = document.createElement("a-animation");
        animation.setAttribute("attribute", "rotation");
        animation.setAttribute("to", `0 360 0`);
        animation.setAttribute("dur", `${(index + 1) * 3000}`);
        animation.setAttribute("repeat", "indefinite");
        planetEntity.appendChild(animation);
    });
});
