package alicjawozniak.service;

import org.springframework.stereotype.Service;

import java.util.*;

class Vertex implements Comparable<Vertex> {
    public final String name;
    public List<Edge> adjacencies;
    public double minDistance = Double.POSITIVE_INFINITY;
    public Vertex previous;

    public Vertex(String argName) {
        name = argName;
    }

    public String toString() {
        return name;
    }

    public int compareTo(Vertex other) {
        return Double.compare(minDistance, other.minDistance);
    }

}


class Edge {
    public final Vertex target;
    public final double weight;

    public Edge(Vertex argTarget, double argWeight) {
        target = argTarget;
        weight = argWeight;
    }
}

@Service
public class DijkstraService {
    public void computePaths(Vertex source) {
        source.minDistance = 0.;
        PriorityQueue<Vertex> vertexQueue = new PriorityQueue<Vertex>();
        vertexQueue.add(source);

        while (!vertexQueue.isEmpty()) {
            Vertex u = vertexQueue.poll();

            // Visit each edge exiting u
            for (Edge e : u.adjacencies) {
                Vertex v = e.target;
                double weight = e.weight;
                double distanceThroughU = u.minDistance + weight;
                if (distanceThroughU < v.minDistance) {
                    vertexQueue.remove(v);

                    v.minDistance = distanceThroughU;
                    v.previous = u;
                    vertexQueue.add(v);
                }
            }
        }
    }

    public List<Vertex> getShortestPathTo(Vertex target) {
        List<Vertex> path = new ArrayList<Vertex>();
        for (Vertex vertex = target; vertex != null; vertex = vertex.previous)
            path.add(vertex);

        Collections.reverse(path);
        return path;
    }

    public int step(int[] distances, int[] factors, int beg, int end) {
        List<Vertex> vertexes = Arrays.asList(
                new Vertex("A"),
                new Vertex("B"),
                new Vertex("C"),
                new Vertex("D"),
                new Vertex("E"),
                new Vertex("F"),
                new Vertex("G"),
                new Vertex("H"),
                new Vertex("I"),
                new Vertex("J")
        );


        for(int i=0;i<10;i++){
            vertexes.get(i).adjacencies=new ArrayList<Edge>();
            List<Edge> e = vertexes.get(i).adjacencies;
            for(int j=0;j<10;j++){
                if(factors[10*j+i]!=0) {
                    e.add(new Edge(
                            vertexes.get(j),
                            (distances[10*j+i])*(factors[10*j+i])
                    ));
                }
            }
        }




        computePaths(vertexes.get(beg)); // run Dijkstra
        List<Vertex> path = getShortestPathTo(vertexes.get(end));
        return vertexes.indexOf(path.get(1));
    }
}