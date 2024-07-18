class Car:
    def __init__(self,color,mileage):
        self.color=color
        self.mileage=mileage

car1=Car("blue", 10000)
car2=Car("red", 20000)

print(f"{car1.color} 자동차의 주행거리는 {car1.mileage}")