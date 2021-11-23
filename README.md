# Real-Time Object Detection (YOLOv2) using Pytorch
This is the project of the Artificial Intelligence course for Fall 2021. This code is to reimplement YOLOv2 with Pytorch framework.

## Before running the code:
You need to install Pycharm.
### To run with GPU:
You need to install CUDA toolkits that satisfying a minimum version of your computer CUDA driver.

You can check CUDA Toolkit Version [here](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html)

### Download PASCAL VOC datasets
I trained my code using PASCAL VOC 2007 and 2012 training datasets and tested using PASCAL VOC 2007 testing dataset.

PASCAL VOC 2007 and 2012 have 20 claases of objects: 

  person, bird, cat, cow, dog, horse, sheep, aeroplane, bicycle, boat, bus, car,
  motorbike, train, bottle, chair, dining table, potted plant, sofa, tv/monitor
  
Each dataset have Annotations, ImageSets, JPEFImages, SegmentationClass, and SegmentationObject folders.
  
  - Download PASCAL VOC 2007 Traning and Testing datasets from [here](http://host.robots.ox.ac.uk/pascal/VOC/voc2007/)
  - Download PASCAL VOC 2012 Traning dataset from [here](http://host.robots.ox.ac.uk/pascal/VOC/voc2012/index.html)

## Running the code:

- Train:
  run #python main.py
- Test:
  run #python Testing.py


## Code Files Descriptions
### Code Files that are my original codes
- main.py
It is to train the model using given epochs and the weights of the network is saved as whole_model.pth .

- Darknet.py
It is the convolutional neural network for training detection.

- Testing.py
It is to test the model with showing mAP(mean Average Precision) and to plot some output images.


### Code Files that have been modifiend
- Loss.py
I read [the loss function file](https://github.com/csm-kr/yolo_v2_vgg16_pytorch/blob/master/loss.py) carefully to fully understand how to modify the loss function from YOLO  to YOLOv2. The loss function file from the repositories uses from different loss function from YOLO. I rewrote the loss function to use the exact same equations from YOLO and modified it applicable to my training model.

### Code Files that have been copied from other repositories
My main contributions are to reimplement YOLOv2 neural network and loss function. Other functions are copied from other repositories.

Three python files are copied from [the repositories](https://github.com/csm-kr/yolo_v2_vgg16_pytorch)
- Evaluation.py [code](https://github.com/csm-kr/yolo_v2_vgg16_pytorch/blob/master/voc_eval.py)
- Dataset.py [code](https://github.com/csm-kr/yolo_v2_vgg16_pytorch/blob/master/dataset/voc_dataset.py)
- Transform.py [code](https://github.com/csm-kr/yolo_v2_vgg16_pytorch/blob/master/dataset/trasform.py)
   
