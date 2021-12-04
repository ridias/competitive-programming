function solution(names) {
    let s = new Set(),
        u = [],
        i;
    
    for (let name of names) {
        if (s.has(name)) {
            i = 1;
            while (s.has(`${name}(${i})`)) {
                i++;
            }
            name = `${name}(${i})`;
        }
        
        u.push(name);
        s.add(name);
    }
    
    return u;
}