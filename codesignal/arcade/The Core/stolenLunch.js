function solution(note) {
    for(let i = 0; i < note.length; i++){
        let char = note.charAt(i)
        if(char >= '0' && char <= "9"){
            note = note.substring(0, i) + String.fromCharCode(Math.abs(97 + parseInt(char))) + note.substring(i+1, note.length)
        }else if(char >= 'a' && char <= "j"){
            note = note.substring(0, i) + Math.abs(97 - char.charCodeAt(0)).toString() + note.substring(i+1, note.length)
        }
    }
    return note
}
