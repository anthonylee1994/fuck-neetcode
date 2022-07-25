function isPalindrome(s: string): boolean {
    const str = (s.match(/[A-Za-z0-9]+/g) || []).join("").toLowerCase();
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
}
