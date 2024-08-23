uniform float uTime;

void main(){
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = (0.05 / distanceToCenter) - 0.1;

    float flicker = sin(uTime * 10.0);
    flicker = clamp(flicker, 0.0, 1.0);


    gl_FragColor = vec4(1.0, 1.0, 0.6, strength * flicker);
}