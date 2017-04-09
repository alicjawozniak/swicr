package alicjawozniak.controller;

import alicjawozniak.model.ParamsDTO;
import alicjawozniak.service.DijkstraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@org.springframework.stereotype.Controller
public class Controller {

    @Autowired
    private DijkstraService dijkstraService;

    @GetMapping("/")
    public String index(Model model) {

        return "index";
    }

    @PostMapping("/next-step")
    public ResponseEntity<?> getNextStep(Model model, @RequestBody ParamsDTO paramsDTO) {

        int nextStep = dijkstraService.step(paramsDTO.getDistances(), paramsDTO.getFactors(), paramsDTO.getBeginning(), paramsDTO.getEnd());
        return ResponseEntity.ok(nextStep);
    }
}
