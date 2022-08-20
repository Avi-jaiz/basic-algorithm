function func3(u,v)
{
    if(Math.random()>0.5)
    {
        let [x,y,z]=func1(v)
        u=u+2;
    }
    else {
        let [x,y,z]=func2(v)
        u=u-2;
    }

    return Math.abs(x*u) + Math.abs(y+u) + Math.abs(z-u)
}

console.log(func3(3,2))