function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let resolution = 0;

    while (l < r) {
        resolution = Math.max(resolution, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            l++;
        } else if (height[r] <= height[l]) {
            r--;
        }
    }

    return resolution;
}
