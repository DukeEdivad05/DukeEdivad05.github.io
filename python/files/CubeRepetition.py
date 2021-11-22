#DukeEdivad05
#CubeRepetition

from turtle import Turtle, Screen

t = Turtle()
s = Screen()

s.title("CubeRepetition")
t.hideturtle()
t.speed(0)

dim = 100

def cube():
    t.seth(0)
    for a in range(4):
        t.forward(dim)
        t.left(90)
    t.penup()
    t.forward(dim)
    t.pendown()
    t.left(45)
    t.forward(dim/2)
    t.left(45)
    t.forward(dim)
    t.left(90)
    t.forward(dim)
    t.left(45)
    t.forward(dim/2)
    t.left(135)
    t.penup()
    t.forward(dim)
    t.pendown()
    t.left(45)
    t.forward(dim/2)

def startline():
    t.penup()
    t.backward(dim/2)
    t.left(45)
    t.backward(dim)
    t.right(90)
    t.backward(dim)
    t.left(45)
    t.backward(dim/2)
    t.left(45)
    t.backward(dim)
    t.pendown()

def position():
    t.penup()
    t.left(45)
    t.backward(dim)
    t.pendown()
    t.right(45)

n = int(input("Inserisci un numero: "))
b = 1
for a in range(n):
    if b == 1:
        pos = t.pos()
        cube()
    else:
        t.penup()
        t.setpos(pos)
        t.backward(dim/2)
        t.left(45)
        t.backward(dim)
        pos = t.pos()
        t.pendown()
        for c in range(b):
            cube()
            position()
    b += 1
    
    