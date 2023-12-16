export const makeResonanceCurve = () => {
    let n_samples = 8192,
    ws_table = new Float32Array(n_samples),
    i,
    x;
    for (i = 0; i < n_samples; i++) {
        x = i * 2 / n_samples - 1;
        if (x < -0.08905) {
            ws_table[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
        } else if (x >= -0.08905 && x < 0.320018) {
            ws_table[i] = (-6.153 * (x * x)) + 3.9375 * x;
        } else {
            ws_table[i] = 0.630035;
        }
    }
    return ws_table;
}