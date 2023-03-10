import time
import logging
import argparse


def run(task_id):
    logging.basicConfig(filename=f'{task_id}.log',
                    filemode='a',
                    format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.DEBUG)

    logging.info(f"start {task_id}")
    time.sleep(0.5)
    logging.info("reading data")
    time.sleep(7)
    logging.info("++training")
    for x in range(0, 100, 5):
        logging.info(f"training...{x}")
        time.sleep(0.5)
    # time.sleep(12)
    logging.info(f"finished {task_id}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-l')

    args = parser.parse_args()
    run(args.l)


