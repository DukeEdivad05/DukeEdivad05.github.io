#DukeEdivad05
#CubeRepetionV2

from tkinter import Tk, Canvas, Frame, BOTH
import math

class Example(Frame):
    
    test = ""
    dim = 100
    dim2 = int(dim/2 * math.cos(math.radians(45)))

    def __init__(self):
        super().__init__()

        self.initUI()


    def initUI(self):
        
        n = int(input("Inserisci quante righe vuoi: "))
        
        self.test = n

        self.master.title("CubeRepetition v2")
        self.pack(fill=BOTH, expand=1)

        canvas = Canvas(self)
        a = 1
        x = (n-1) * self.dim2 + 10
        y = self.dim + self.dim2 + 10
        for b in range(n):
            if a == 1:
                self.cube(canvas, x, y)
            else:
                x2 = x - self.dim2
                y2 = y + self.dim + self.dim2
                x3 = x2
                y3 = y2
                for c in range(a):
                    self.cube(canvas, x3, y3)
                    x3 += self.dim + self.dim2
                    y3 -= self.dim2
                x = x2
                y = y2
            a += 1

        canvas.pack(fill=BOTH, expand=1)
        d = n
        return d
    
    def cube(self, canvas, startX, startY):
        canvas.create_line(startX, startY - self.dim,
                           startX, startY,
                           startX + self.dim, startY,
                           startX + self.dim, startY - self.dim,
                           startX, startY - self.dim,
                           startX + self.dim2, startY - (self.dim + self.dim2),
                           startX + (self.dim + self.dim2), startY - (self.dim + self.dim2),
                           startX + self.dim, startY - self.dim,
                           startX + (self.dim + self.dim2), startY - (self.dim + self.dim2),
                           startX + (self.dim + self.dim2), startY - self.dim2, #Il successivo deve partire da qui
                           startX + self.dim, startY)
        pos = (startX + self.dim + self.dim2 , startY - self.dim2)
    


def main():

    root = Tk()
    ex = Example()
    dimensions = str(ex.test * (ex.dim + ex.dim2) + 20) + "x" + str(ex.test * (ex.dim + ex.dim2) + 20)
    root.geometry(dimensions)
    root.mainloop()


if __name__ == '__main__':
    main()